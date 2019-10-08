import { User } from '../db/models';
import { UserInput } from '../schema/resolvers/types';

export const createUser = async (user: UserInput): Promise<User['id']> => {
  const _user = await User.create(user);
  return _user.id;
};
