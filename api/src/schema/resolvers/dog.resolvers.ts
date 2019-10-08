import { Dog, MutationResolvers, QueryResolvers } from './types';
import { getDog, getDogs, createDog } from '../../controllers';
import { UserInputError } from 'apollo-server-errors';
import { ValidationError } from 'sequelize';

const queryResolvers: QueryResolvers = {
  dog: async (parent, args, context, info): Promise<Dog> => {
    try {
      return await getDog(args.id);
    } catch (e) {
      return null;
    }
  },
  dogs: async (parent, args, context, info): Promise<Dog[]> => {
    try {
      return await getDogs();
    } catch (e) {
      return [];
    }
  },
};

const mutationResolvers: MutationResolvers = {
  createDog: async (parent, args, context, info): Promise<Dog['id']> => {
    try {
      return await createDog(args.dog);
    } catch (e) {
      console.log('e', e);
      if (e instanceof ValidationError) {
        throw new UserInputError('Invalid input', { errors: (e as ValidationError).errors });
      }
    }
  },
};

export default { Query: queryResolvers, Mutation: mutationResolvers };
