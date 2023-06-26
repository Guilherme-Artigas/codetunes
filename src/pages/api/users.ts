import { NextApiRequest, NextApiResponse } from 'next';
import userService from '@/backend/services';

export default async function Users(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  if (method === 'GET') {
    try {
      const { nome } = req.query;

      if (!nome) {
        const { status, result } = await userService.getAllUsers();

        return res.status(status).json(result);
      }

      const { status, message } = await userService.getOneUser(nome as string);

      return res.status(status).json({ message });
    } catch (e) {
      console.error(e);
    }
  }

  if (method === 'POST') {
    try {
      const { status, message } = await userService.createUser(req.body);

      return res.status(status).json({ message });
    } catch (e) {
      console.error(e);
    }
  }

  if (method === 'PUT') {
    const { body, query: { nome } } = req;
    try {
      const { status, message } = await userService.updateUser(nome as string, body);

      return res.status(status).json({ message });
    } catch (e) {
      console.error(e);
    }
  }

  if (method === 'DELETE') {
    const { query: { nome } } = req;
    try {
      const { status, message } = await userService.deleteUser(nome as string);

      return res.status(status).json({ message });
    } catch (e) {
      console.error(e);
    }
  }
};
