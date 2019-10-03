import Scalar from './type-defs/Scalar.graphql';
import Query from './type-defs/Query.graphql';
import Mutation from './type-defs/Mutation.graphql';
import Dog from './type-defs/Dog.graphql';
import { GraphQLDateTime } from 'graphql-iso-date';
import dogResolvers from './resolvers/dog.resolvers';
import { merge } from 'lodash';

export const typeDefs = [Scalar, Query, Mutation, Dog];
export const resolvers = merge({ DateTime: GraphQLDateTime }, dogResolvers);
