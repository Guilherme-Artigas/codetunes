import clientPromise from './mongodb';

export default async function connection() {
  const client = await clientPromise;
  const db = client.db('codetunesDB');

  return db;
}
