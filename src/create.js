const { v4 } = require("uuid");
const AWS = require("aws-sdk");

const handler = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const { nome, idade, cargo } = JSON.parse(event.body);
  const createdAt = new Date();
  createdAt.setDate()
  
  const id = v4();

  const novoUsuario = {
    id,
    nome,
    idade,
    cargo,
    createdAt,
  };

  await dynamodb
    .put({
      TableName: "TabelaUsuario",
      Item: novoUsuario,
    })
    .promise();

  return {
    statusCode: 200,
    body: JSON.stringify(novoUsuario),
  };
};

module.exports = {
    handler,
  };
  