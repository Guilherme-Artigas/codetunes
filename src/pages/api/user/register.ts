import { NextApiRequest, NextApiResponse } from 'next';
import userService from '@/backend/services';

export default async function Register(req: NextApiRequest, res: NextApiResponse) {
  const { status, message } = await userService.createUser(req.body);

  return res.status(status).json({ message });
}
