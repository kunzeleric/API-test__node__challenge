import express, { Request, Response } from 'express';
import alunoFactory from './aluno.factory';

export const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  const data = await alunoFactory.getAll();
  return res.status(200).json({ data });
});

router.post('/', async (req: Request, res: Response) => {
  const data = await alunoFactory.store(req.body);
  return res.status(200).json({ data });
});
