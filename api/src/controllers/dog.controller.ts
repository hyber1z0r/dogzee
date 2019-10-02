import moment from 'moment';
import qs from 'qs';
import { Dog } from '../db/models';
import { Request, Response } from 'express';
import { NotFoundError } from '../errors';

export class DogController {
  public async createDog(req: Request, res: Response) {
    let { birthday, ...rest } = req.body;
    birthday = moment(birthday, 'DD.MM.YYYY').toDate();
    const dog = await Dog.create({ ...rest, birthday });
    res.json(dog);
  }

  public async getDogs(req: Request, res: Response) {
    const where = qs.parse(req.query);
    const dogs = await Dog.findAll({ where });
    res.json(dogs);
  }

  public async getDog(req: Request, res: Response) {
    const { id } = req.params;

    const dog = await Dog.find({
      where: { id }
    });

    if (!dog) {
      throw new NotFoundError(`Dog with registration ${id} not found`);
    }

    res.json(dog);
  }
}
