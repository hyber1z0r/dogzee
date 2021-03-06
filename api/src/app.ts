'use strict';

import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers, context } from './schema';

class App {
  public app: express.Application;
  private readonly server: ApolloServer;

  constructor() {
    this.app = express();
    this.server = new ApolloServer({ typeDefs, resolvers, context });
    this.config();
  }

  private config(): void {
    this.app.set('port', process.env.PORT || 3000);
    this.app.use(cors({ credentials: true }));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(logger('dev'));
    this.server.applyMiddleware({ app: this.app, cors: false });
  }
}

export default new App().app;
