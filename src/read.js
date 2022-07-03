const AWS = require("aws-sdk");

const handler = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const listarTodosUsuarios = await dynamodb.scan({ TableName: "TabelaUsuario" }).promise();

  const usuarios = listarTodosUsuarios.Items;

  return {
    status: 200,
    body: {
        usuarios,
    },
  };
};

module.exports = {
    handler,
};