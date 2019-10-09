import { User, MutationResolvers, QueryResolvers } from './types';
import { createUser, findBy, getUser } from '../../controllers';
import { UserInputError } from 'apollo-server-errors';
import { ValidationError } from 'sequelize';
import { AuthenticationError, NotFoundError } from '../../errors';
import jwt from 'jsonwebtoken';

const queryResolvers: QueryResolvers = {
  me: async (parent, args, context, info): Promise<User> => {
    if (!context.user) {
      throw new AuthenticationError('Du er ikke logget ind.');
    }
    return getUser(context.user.id);
  },
};

const mutationResolvers: MutationResolvers = {
  createUser: async (parent, args, context, info): Promise<User['id']> => {
    try {
      return await createUser(args.user);
    } catch (e) {
      if (e instanceof ValidationError) {
        throw new UserInputError('Invalid input', { errors: (e as ValidationError).errors });
      }
    }
  },
  login: async (parent, args, context, info): Promise<string> => {
    const { email, password } = args.credentials;
    const user = await findBy('email', email);
    if (!user) {
      throw new NotFoundError(`Der blev ikke fundet nogen bruger med email-adressen "${email}".`);
    }
    const match: boolean = await user.comparePassword(password);
    if (!match) {
      throw new AuthenticationError(`Forkert kodeord`);
    }
    return jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  },
};

export default { Query: queryResolvers, Mutation: mutationResolvers };
