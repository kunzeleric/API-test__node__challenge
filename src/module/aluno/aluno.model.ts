import { Knex } from 'knex';
import { KnexService } from '../../service/knex';
import { Aluno, AlunoCreateParams } from './aluno';

export class Alunos {
  private db: Knex;

  constructor(knexService: KnexService) {
    this.db = knexService.obterConexao();
  }
  getAll = async (): Promise<Aluno[] | []> => {
    return this.db('aluno').select();
  };

  store = async (params: AlunoCreateParams) => {
    return this.db('aluno').insert(params);
  };
}