import { Context, ContextFunction } from 'apollo-server-core';
import { ExpressContext } from 'apollo-server-express/src/ApolloServer';
import { ValueOrPromise } from 'apollo-server-types';
import jwt from 'jsonwebtoken';

export const context: ContextFunction<ExpressContext, Context> = ({ req }: ExpressContext): ValueOrPromise<Context> => {
  const bearerToken = req.headers.authorization || '';

  const user = getUser(bearerToken);

  return { user };
};

const getUser = (bearerToken: string) => {
  try {
    if (!bearerToken.startsWith('Bearer ')) {
      return null;
    }
    const token = bearerToken.split(' ')[1];
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (e) {
    return null;
  }
};
