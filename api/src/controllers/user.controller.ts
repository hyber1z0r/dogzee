import { Dog, User } from '../db/models';
import { UserInput } from '../schema/resolvers/types';

export const createUser = async (user: UserInput): Promise<User['id']> => {
  const _user = await User.create(user);
  return _user.id;
};

export const findBy = async <K extends keyof User, V extends User[K]>(findBy: K, value: V): Promise<User> => {
  return await User.find({ where: { [findBy]: value } });
};

export const getUser = async (id: User['id']): Promise<User> => {
  return await User.findById(id, {
    include: [{
      model: Dog,
    }],
  });
};
