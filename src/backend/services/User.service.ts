import { compareSync, hashSync } from 'bcrypt';
import IUserProfile from '@/backend/interfaces/IUserProfile';
import loginUserSchema from './validations/LoginUser';
import userModel from '@/backend/models';
import userSchema from './validations/NewUser';

// export async function getAllUsers() {
//   const result = await userModel.getAllUsers();

//   return { status: 200, result };
// }

export async function getOneUser(userEmail: string) {
  const result = await userModel.getOneUser(userEmail);
  if (!result) {
    return {
      status: 404,
      message: `Usuário ${userEmail} não encontrado.`
    };
  }

  return { status: 200, message: result };
}

export async function createUser(user: IUserProfile) {
  const { error } = userSchema.validate(user);
  if (error) return { status: 400, message: error.message };
  const { userEmail, userName, userImg, userPass } = user;
  const hashPass = hashSync(userPass as string | any, 10);
  const newUser = {
    userName,
    userEmail,
    userPass: hashPass,
    userImg
  };

  await userModel.createUser(newUser);

  return { status: 201, message: 'Usuário cadastrado com sucesso!' };
}

// export async function updateUser(nome: string, user: IUserProfile) {
//   const { error } = userSchema.validate(user);
//   if (error) return { status: 400, message: error.message };

//   await userModel.updateUser(nome, user);

//   return { status: 200, message: 'Usuário atualizado com sucesso!' };
// }

export async function deleteUser(userEmail: string) {
  const { status, message } = await getOneUser(userEmail);

  if (status === 404) return { status, message };
  await userModel.deleteUser(userEmail);

  return { status: 200, message: 'Usuário excluído com sucesso!' };
}

export async function loginUser(userEmail: string, userPass: string) {
  const { error } = loginUserSchema.validate({ userEmail, userPass });
  if (error) return { status: 400, message: error.message };

  const user = await userModel.getOneUser(userEmail);

  if (!user || !compareSync(userPass, user.userPass)) {
    return { status: 404, message: 'Email ou senha inválidos' };
  }

  return {
    status: 200,
    message: {
      userName: user.userName,
      userEmail: user.userEmail,
      userImg: user.userImg
    }
  };
}
