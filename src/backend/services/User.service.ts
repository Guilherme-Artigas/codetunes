import IUserProfile from '@/backend/interfaces/IUserProfile';
import userModel from '@/backend/models';
import userSchema from './validations/NewUser';

export async function getAllUsers() {
  const result = await userModel.getAllUsers();

  return { status: 200, result };
}

export async function getOneUser(userName: string) {
  const result = await userModel.getOneUser(userName);
  if (!result) {
    return {
      status: 404,
      message: `Usuário ${userName} não encontrado.`
    };
  }

  return { status: 200, message: result };
}

export async function createUser(user: any) {
  // const { error } = userSchema.validate(user);
  // if (error) return { status: 400, message: error.message }; aiai
  const teste = JSON.parse(user as string);
  await userModel.createUser(teste);

  return { status: 201, message: 'Usuário cadastrado com sucesso!' };
}

export async function updateUser(nome: string, user: IUserProfile) {
  const { error } = userSchema.validate(user);
  if (error) return { status: 400, message: error.message };

  await userModel.updateUser(nome, user);

  return { status: 200, message: 'Usuário atualizado com sucesso!' };
}

export async function deleteUser(nome: string) {
  const { status, message } = await getOneUser(nome);

  if (status === 404) return { status, message };
  await userModel.deleteUser(nome);

  return { status: 200, message: 'Usuário excluído com sucesso!' };
}
