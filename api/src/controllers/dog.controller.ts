import { Dog } from '../db/models';
import { NotFoundError } from '../errors';
import { DogInput } from '../schema/resolvers/types';

export const getDog = async (id: Dog['id']): Promise<Dog> => {
  const dog = await Dog.findByPk(id);

  if (!dog) {
    throw new NotFoundError(`Dog with registration ${id} not found`);
  }

  return dog;
};

export const getDogs = async (): Promise<Dog[]> => await Dog.findAll();

export const createDog = async (dog: DogInput): Promise<Dog['id']> => {
  const _dog = await Dog.create(dog);
  return _dog.id;
};
