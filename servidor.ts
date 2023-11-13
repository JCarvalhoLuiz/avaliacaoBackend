import { PrismaClient } from '@prisma/client'  // Importação do "client" de Prisma gerado em "schema.prisma"
import express from 'express'  // Importação da biblioteca Express

const app = express()  // Variável para instanciar a biblioteca Express
app.use(express.json())  // Comando para que o conteúdo das requisições seja interpretado como JSON
const prisma = new PrismaClient()  // Instância do "client" importado de "PrismaClient"

// Rota para as requisições GET:
app.get("/", async (req, res) => {
  const clients = await prisma.avaliacaoPrisma.findMany()  // Através do Prisma, "findMany" mostrará todos os registros
  return res.json(clients)
})

// Rota para as requisições POST:
app.post("/client", async (req, res) => {
  const {nome, email} = req.body
  const client = await prisma.avaliacaoPrisma.create({  // Através do Prisma, um novo registro será criado, inserindo-se "nome" e "email", sendo o "id" autoincremental
    data:{
      nome,
      email
    }
  })
  return res.json(client)
})

// Rota para as requisições PUT:
app.put("/client/:id", async (req, res) => {
  const {nome, email} = req.body
  const client = await prisma.avaliacaoPrisma.update({  // Através do Prisma, "nome" e "email" de um "id" especificado serão atualizados no registro conforme dados fornecidos
    data:{
      nome,
      email
    },
    where: {
      id: Number(req.params.id)
    }
  })
  return res.json(client)
})

// Rota para as requisições DELETE:
app.delete("/:id", async (req, res) => {
  await prisma.avaliacaoPrisma.delete({  // Através do Prisma, os dados de um "id" especificado serão deletados da tabela no banco de dados
    where:{
      id: Number(req.params.id)
    }
  })
  return res.status(204).send()
  
})

// Porta designada para o servidor ficar escutando, e uma mensagem de confirmação de execução:
app.listen(3333, () => console.log("Servidor rodando..."))