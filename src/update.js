const AWS = require("aws-sdk");

const handler = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const { id } = event.pathParameters;

  const { nome, idade, cargo } = JSON.parse(event.body);

  await dynamodb
    .update({
      TableName: "TabelaUsuario",
      Key: { id },
      UpdateExpression: "SET nome = :nome, idade = :idade, cargo = :cargo",
      ExpressionAttributeValues: {
        ":nome": nome,
        ":idade": idade,
        ":cargo": cargo,
      },
      ReturnValues: "ALL_NEW",
    })
    .promise();

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Usuário Atualizado",
    }),
  };
};

module.exports = {
  handler,
};
