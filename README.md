# Serverless App

Esta é uma aplicação serverless desenvolvida usando AWS Lambda e AWS DynamoDB.

## Requisitos

Certifique-se de que você tenha as seguintes ferramentas e configurações:

- Node.js
- Conta AWS configurada com as devidas permissões.
- AWS CLI instalado e configurado com as credenciais corretas.

## Configuração

1. Clone este repositório.

2. Execute `npm install` para instalar as dependências necessárias.

## Como Usar

### Implantação

1. Execute `sls deploy` para implantar a aplicação no AWS Lambda e criar a tabela DynamoDB.

### Testando a Aplicação

1. Após a implantação, você receberá URLs para cada função Lambda. Use essas URLs para fazer chamadas HTTP às funções da aplicação.

### Função `app`

- URL: `<URL-da-Função-app>`
- Método: GET

Esta função é um exemplo simples que retorna uma mensagem de sucesso quando chamada.

### Função `postItem`

- URL: `<URL-da-Função-postItem>`
- Método: POST

Esta função permite adicionar itens à tabela DynamoDB. Envie um JSON no corpo da solicitação com os dados do item a ser adicionado.

### Função `getItems`

- URL: `<URL-da-Função-getItems>`
- Método: GET

Esta função recupera todos os itens da tabela DynamoDB.

### Função `getItem`

- URL: `<URL-da-Função-getItem>`
- Método: GET

Esta função recupera um item específico da tabela DynamoDB com base em seu ID.

### Função `putItem`

- URL: `<URL-da-Função-putItem>`
- Método: PUT

Esta função permite atualizar um item específico na tabela DynamoDB com base em seu ID. Envie um JSON no corpo da solicitação com os dados do item atualizado.

## Licença

Este projeto está licenciado sob os termos da [Licença MIT](LICENSE).