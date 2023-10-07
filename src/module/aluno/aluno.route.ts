import express, { Request, Response } from 'express';
import alunoFactory from './aluno.factory';

export const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  const data = await alunoFactory.getAll();
  return res.status(200).json({ data });
});

router.post('/', async (req: Request, res: Response) => {
  const data = await alunoFactory.store(req.body);
  const { nome, cpf } = req.body;

  if(!nome && !cpf) {
    return res.status(400).json({ error: "Inserir informações nos campos."})
  }
  
  if(!nome) {
    return res.status(400).json({ error: "Inserir nome de aluno."})
  }

  if(!cpf) {
    return res.status(400).json({ error: "Inserir CPF de aluno."})
  }

  return res.status(200).json({ data });
});
