import * as express from 'express';
import { DogController } from '../controllers';
import asyncWrap from '../utils/asyncWrap';

export class DogRoutes {
  private dogController: DogController = new DogController();

  public routes(app: express.Application): void {
    app.route('/dogs')
        .post(asyncWrap(this.dogController.createDog))
        .get(asyncWrap(this.dogController.getDogs));

    app.route('/dogs/:id')
        .get(asyncWrap(this.dogController.getDog))
  }
}
