import request from 'supertest';
const {getType} = require('jest-get-type');

describe('Int - Aluno Suite', () => {
  it('##GET /alunos - Deve retornar alunos cadastrados', async () => {
    const response = await request('http://localhost:8080').get('/aluno');

    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);

    expect(getType(response.body.data)).toBe('array');
  })
})