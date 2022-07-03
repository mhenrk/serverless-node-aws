const AWS = require("aws-sdk");

const handler = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  await dynamodb
    .delete({
      TableName: "TabelaUsuario",
      Key: {
        id: event.pathParameters.id,
      },
    })
    .promise();

  return {
    status: 200,
    body: {
      message: 'Usuario Deletado'
    }
  };
};

module.exports = {
  handler,
};