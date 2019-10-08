import { User, MutationResolvers } from './types';
import { createUser } from '../../controllers';
import { UserInputError } from 'apollo-server-errors';
import { ValidationError } from 'sequelize';

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
};

export default { Mutation: mutationResolvers };
