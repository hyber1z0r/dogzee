import { NextFunction, Request, RequestHandler, Response } from 'express';

function asyncWrap(fn: (req: Request, res: Response, next?: NextFunction) => Promise<any>): RequestHandler {
  return function (req: Request, res: Response, next?: NextFunction) {
    fn(req, res, next).catch(next);
  };
}

export default asyncWrap;
