const AWS = require("aws-sdk");

const handler = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const { id } = event.pathParameters

  await dynamodb
    .delete({
      TableName: "TabelaUsuario",
      Key: {
        id: `${id}`
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