const AWS = require("aws-sdk");

const handler = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const { id } = event.pathParameters;

  const { nome } = JSON.parse(event.body);

  await dynamodb
    .update({
      TableName: "TabelaUsuario",
      Key: { id },
      UpdateExpression: "set nome = :nome",
      ExpressionAttributeValues: {
        ":nome": nome        
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