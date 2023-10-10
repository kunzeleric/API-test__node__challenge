
# Testes de Integração - Node.js + TS

Aplicação desenvolvida para concluir desafio do curso de desenvolvimento web.
O projeto foi fornecido em JavaScript, e tinha os seguintes requisitos:

- Migração para TypeScript;
- Configuração do Jest;
- Testes de Integração;

O projeto se trata de uma API para cadastro e busca de alunos, onde são registrados alunos com dois campos obrigatórios: nome e CPF.

### Tecnologias

- Node.js + TypeScript
- Supertest
- Jest
- Knex
- MySQL




## Instalação

Instale o projeto com o seguinte comando:

```bash
  npm install
```

## Configuração DB

Configurar o MySQL (config/knex.ts):

- User (root, ou de acordo com sua instalação do MySQL no sistema operacional)
- Password (acordo com sua instalação do MySQL no sistema operacional)
- Database (de acordo com o nome do banco que foi criado localmente)

## Rodando os testes

Para rodar os testes, rode o seguinte comando:

```bash
  npm run test
```

### Testes da rota GET

- Teste de status resposta HTTP
- Teste de tipo de conteúdo (JSON)
- Teste de tipo de dado retornado no JSON (array)

### Testes da rota POST

- Teste de status resposta HTTP (200) com campos preenchidos
- Teste faltando ambos campos para cadastro de aluno
- Teste faltando campo de NOME
- Teste faltando campo de CPF
## Rotas API

#### Retornar todos alunos

```http
  GET /alunos
```

#### Posta um aluno

```http
  POST /alunos
```

| Dado   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `nome` | `string` | **Obrigatório**. Nome do aluno |
| `CPF` | `number` | **Obrigatório**. CPF do aluno. |
