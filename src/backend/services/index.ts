import {
  createUser,
  deleteUser,
  getAllUsers,
  getOneUser,
  updateUser
} from '@/backend/services/User.service';

const userService = {
  createUser,
  deleteUser,
  getAllUsers,
  getOneUser,
  updateUser
};

export default userService;
