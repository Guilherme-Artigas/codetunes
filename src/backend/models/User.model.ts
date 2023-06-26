import IUserProfile from '@/backend/interfaces/IUserProfile';
import clientPromise from './db/mongodb';

export async function getAllUsers() {
  const client = await clientPromise;
  const db = client.db('codetunesDB');

  const result = await db.collection('users').find({}).toArray();

  return result;
}

export async function getOneUser(userName: string) {
  const client = await clientPromise;
  const db = client.db('codetunesDB');

  const result = await db.collection('users').findOne({ nome: userName });

  return result;
}

export async function createUser(user: IUserProfile) {
  const client = await clientPromise;
  const db = client.db('codetunesDB');

  const result = await db.collection('users').insertOne({ ...user });

  return result;
}

export async function updateUser(nome: string, user: IUserProfile) {
  const client = await clientPromise;
  const db = client.db('codetunesDB');

  const result = await db.collection('users').updateOne({ nome }, { $set: { ...user } });

  return result;
}

export async function deleteUser(nome: string) {
  const client = await clientPromise;
  const db = client.db('codetunesDB');

  const result = await db.collection('users').deleteOne({ nome });

  return result;
}
