import { NextFunction, Request, Response } from 'express';
import { Sequelize } from 'sequelize-typescript';

export function handleDatabaseError(error: any, req: Request, res: Response, next?: NextFunction) {
  if (error instanceof Sequelize.ValidationError || error instanceof Sequelize.DatabaseError) {
    return res.status(400).json({
      type: 'SequelizeError',
      message: error.message
    });
  }
  next(error);
}
