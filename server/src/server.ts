import fastify from "fastify";
import { PrismaClient } from "@prisma/client";

const app = fastify();

//fazer conexão com o BD
const prisma = new PrismaClient()


//Criar ROTA
//pra usar o await precisa ser async (assincrona)
//findmany - trazer varios usuarios
app.get("/users", async () => {
  const users = await prisma.user.findMany()
  return users
});

//Criar APP
//Como esse vai ser meu primeiro codigo que mostra a criação do servidor estarei comentando tudo aqui.
//servidor HTTP - requisições para voltar a resposta.
//listen - recebe um obj de config, sendo uma das mais importantes a PORT do servidor
//then permite ouvir tudo quando terminar, ou seja assim que o servidor terminar ENTÃO execute isso

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP RUNING on  local 3333😊");
  });
