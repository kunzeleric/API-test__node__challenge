import { Alunos } from "./aluno.model";
import { KnexService } from "../../service/knex";

export default new Alunos(new KnexService);