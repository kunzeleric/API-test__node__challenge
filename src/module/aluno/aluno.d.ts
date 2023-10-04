export interface Aluno {
  id: number
  nome: string
  cpf: number
}

export interface AlunoCreateParams {
  nome: string
  cpf: number
}