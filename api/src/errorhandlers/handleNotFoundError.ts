import { NextFunction, Request, Response } from 'express';
import { NotFoundError } from '../errors';

export function handleNotFoundError(error: any, req: Request, res: Response, next?: NextFunction) {
  if (error instanceof NotFoundError) {
    return res.status(404).json({
      type: 'NotFoundError',
      message: error.message
    });
  }
  next(error);
}
