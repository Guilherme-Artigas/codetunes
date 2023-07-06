import { NextApiRequest, NextApiResponse } from 'next';
import userService from '@/backend/services';

export default async function Login(req: NextApiRequest, res: NextApiResponse) {
  const { userEmail, userPass } = req.body;
  const { status, message } = await userService.loginUser(userEmail, userPass);

  return res.status(status).json({ message });
}
