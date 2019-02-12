'use strict';

import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';
import { DogRoutes } from './routes';
import { handleDatabaseError, handleNotFoundError } from './errorhandlers';

class App {
  public app: express.Application;
  public dogRoutes: DogRoutes = new DogRoutes();

  constructor() {
    this.app = express();
    this.config();
    this.routes();
    this.errorhandling();
  }

  private config(): void {
    this.app.set('port', process.env.PORT || 3000);
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(logger('dev'));
  }

  private routes(): void {
    this.dogRoutes.routes(this.app);
  }

  private errorhandling(): void {
    this.app.use(handleDatabaseError);
    this.app.use(handleNotFoundError);
  }
}

export default new App().app;
