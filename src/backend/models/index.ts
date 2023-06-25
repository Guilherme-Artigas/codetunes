import {
  createUser,
  deleteUser,
  getAllUsers,
  getOneUser,
  updateUser
} from '@/backend/models/User.model';

const userModel = {
  createUser,
  deleteUser,
  getAllUsers,
  getOneUser,
  updateUser
};

export default userModel;
