import { commonServices } from '../utils/api/api';
import { convertArrayToObject } from '../utils/utils';
import { User } from '../models/user.model';

const getUsersService = async () => {
  try {
    const response = await commonServices.get('/users');
    const users = convertArrayToObject(User.mappingUsers(response.data), 'id');
    return users;
  } catch (error) {
    return error;
  }
};

export { getUsersService };
