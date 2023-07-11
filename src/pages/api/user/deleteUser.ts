import { NextApiRequest, NextApiResponse } from 'next';
import userService from '@/backend/services';

export default async function deleteUser(req: NextApiRequest, res: NextApiResponse) {
  const { userEmail } = req.query;

  const { status, message } = await userService.deleteUser(userEmail as string);

  return res.status(status).json({ message });
}
