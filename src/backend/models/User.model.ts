import IUserProfile from '@/backend/interfaces/IUserProfile';
import clientPromise from './db/mongodb';

async function connection() {
  const client = await clientPromise;
  const db = client.db('codetunesDB');

  return db;
}

export async function getAllUsers() {
  const db = await connection();

  const result = await db.collection('users').find({}).toArray();

  return result;
}

export async function getOneUser(userEmail: string) {
  const db = await connection();

  const result = await db.collection('users').findOne({ userEmail });

  return result;
}

export async function createUser(user: IUserProfile) {
  const db = await connection();

  const result = await db.collection('users').insertOne({ ...user });

  return result;
}

export async function updateUser(nome: string, user: IUserProfile) {
  const db = await connection();

  const result = await db.collection('users').updateOne({ nome }, { $set: { ...user } });

  return result;
}

export async function deleteUser(userEmail: string) {
  const db = await connection();

  const result = await db.collection('users').deleteOne({ userEmail });

  return result;
}
