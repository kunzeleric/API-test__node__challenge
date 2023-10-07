import request from 'supertest';
const {getType} = require('jest-get-type');

const baseURL = "http://localhost:8080";

describe('Int - Aluno Suite', () => {
  it('##GET /alunos', async () => {
    const response = await request(baseURL).get('/aluno');

    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
    expect(getType(response.body.data)).toBe('array');
  })

  it('##POST /alunos', async () => {
    const aluno = {
      nome: "João da Silva",
      cpf: 123456789
    }

    const response = await request(baseURL).post('/aluno').send(aluno);

    expect(response.status).toBe(200);
  })

  it('##POST /alunos - faltando campos de nome e CPF do aluno', async () => {
    const response = await request(baseURL).post('/aluno').send();

    expect(response.status).toBe(400);
    expect(response.body).toStrictEqual({ error: "Inserir informações nos campos."})
  })

  it('##POST /alunos - faltando campos de nome de aluno', async () => {
    const response = await request(baseURL).post('/aluno').send({
      nome: "",
      cpf: 123456789
    });

    expect(response.status).toBe(400);
    expect(response.body).toStrictEqual({ error: "Inserir nome de aluno."})
  })

  it('##POST /alunos - faltando campos de CPF de aluno', async () => {
    const response = await request(baseURL).post('/aluno').send({
      nome: "João da Silva",
    });

    expect(response.status).toBe(400);
    expect(response.body).toStrictEqual({ error: "Inserir CPF de aluno."})
  })
})