import { User, MutationResolvers } from './types';
import { createUser, findBy } from '../../controllers';
import { UserInputError } from 'apollo-server-errors';
import { ValidationError } from 'sequelize';
import { AuthenticationError, NotFoundError } from '../../errors';
import jwt from 'jsonwebtoken';

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
      throw new NotFoundError(`User with email: "${email}" not found`);
    }
    const match: boolean = await user.comparePassword(password);
    if (!match) {
      throw new AuthenticationError(`Password incorrect for user with email: "${email}"`);
    }
    return jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  },
};

export default { Mutation: mutationResolvers };
