# README
### A aplicação

O projeto trata de uma aplicação *RESTful* que utiliza **Node.js**, **Express** e **Prisma**, que realiza operações *CRUD* (Create, Read, Update and Delete), onde cada usuário deve possuir um *id* (autoincremental), *nome* e *email* (único). Os dados são persistidos em um banco de dados PostgreeSQL, utilizando-se o serviço fornecido pelo site [Neon](https://neon.tech).
Este projeto refere-se à uma avaliação da disciplina de Desenvolvimento Backend, ministrada no curso Tecnólogo em Sistemas para Internet, do Instituto Federal de Educação, Ciência e Tecnologia do Maranhão (IFMA) - Campus Timon.


### Recursos utilizados

 - VSCode;
 - Node.js;
 - Ferramenta Prisma;
 - Framework Express;
 - Typescript;
 - Banco de dados PostgreeSQL (site Neon).
 
O projeto, denominado *"AvaliacaoPrisma"*, foi criado no VSCode, sendo este recomendado para a execução (o Node.js deve estar devidamente instalado na máquina). A extensão do Prisma foi instalada no VSCode, para melhor estruturar o código.
A ferramenta Prisma foi devidamente instalada seguindo-se a [documentação](https://www.prisma.io/docs/getting-started/quickstart) para instalação e configuração. A sua arquitetura de três camadas, *Prisma Client*, *Prisma Migrate* e *Prisma Studio*, oferecem todo o recurso necessário para geração do cliente, conexão e interação com o banco de dados.
Para a composição do banco de dados utilizou-se o site [Neon](https://neon.tech), onde o usuário realiza o *login* e cria um novo projeto de banco de dados. Ao ser criado, o projeto fornece os URLs necessários para a conexão com o database, especificados como *DATABASE_URL* e *DIRECT_URL*, ambos contendo as credenciais que deverão ser adicionadas ao arquivo ".env", responsável por direcionar à localização do database, criado na instalação do Prisma.
 
 
### Execução do projeto

Dentro da pasta do projeto, abra o terminal integrado e execute o comando **npx tsx servidor.ts**; isto fará o servidor executar, e a mensagem *"Servidor rodando..."* aparecerá no console.

Existem diversas maneiras de gerenciar o banco de dados:

**1. Extensão RESTClient, do VSCode**
Uma delas é instalando-se a extensão RESTClient, e depois executando-se as rotas definidas no arquivo Typescript, através de um arquivo *.http* (por exemplo, o arquivo *rotas.http*, já existente na pasta do projeto).
Escrevendo-se o nome do método HTTP, no supracitado arquivo, um comando denominado *"Send Request"* aparecerá em cima do mesmo, e que será responsável por enviar a requisição.

Para a requisição **GET**, insere-se:
> GET http://localhost:3333
Content-Type: application/json
	
*"3333"* é a porta especificada no arquivo *servidor.ts* para que as requisições sejam recebidas; *"application/json"* é usado para indicar o tipo de arquivo a ser retornado (no caso, JSON); desta forma, os dados serão lidos da tabela.

Para a requisição **POST**, insere-se:
>	GET http://localhost:3333/client
	Content-Type: application/json
	{
	  "nome": "Nome",
	  "email": "email@email.com"
	}
	
Neste caso, a diferença é que o caminho deve ser ajustado, e que será necessário passar o objeto com os dados a serem criados na tabela.

Para a requisição **PUT**, insere-se:
>	GET http://localhost:3333/client/1
	Content-Type: application/json
	{
	  "nome": "OutroNome",
	  "email": "outroemail@email.com"
	}
	
Neste caso, a diferença é que o caminho também deve ser ajustado, especificando-se o *id* requerido (no exemplo, "1"), e que será necessário passar o objeto com os dados a serem atualizados na tabela.

Para a requisição **DELETE**, insere-se:
>	GET http://localhost:3333/1
	Content-Type: application/json

Neste caso, a diferença é que o caminho também deve ser ajustado, especificando-se o *id* requerido (no exemplo, "1"); desta forma, os dados serão excluídos da tebela.

Para verificar os dados, pode-se acessar a porta no navegador, na URL http://localhost:3333.

**2. Prisma Studio**
O gerenciamento do banco de dados também pode ser feito através do recurso Prisma Studio, que pode ser acessado inserindo-se o seguinte comando no terminal integrado: **npx prisma studio**.
O Prisma Studio será aberto no navegador, na URL *http://localhost:5555*. Nesta URL é possível executar todas as operações CRUD para o gerenciamento de dados na tabela.

**3. Outras ferramentas** podem ser usadas para realizar as operações, como o *Insomnia* e o *Postman*.

---