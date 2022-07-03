const AWS = require("aws-sdk");

describe("Update User", () => {
  it("should be possible update a user by params id", async () => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    // const { id } = event.pathParameters;:
    // const { nome, idade, cargo } = JSON.parse(event.body);

    const usuarioAtualizado = await dynamodb
    .update({
      TableName: "TabelaUsuario",
      // Key: { id },
      UpdateExpression: "SET nome = :nome, idade = :idade, cargo = :cargo",
      ExpressionAttributeValues: {
        ":nome": nome,
        ":idade": idade,
        ":cargo": cargo,
      },
      ReturnValues: "ALL_NEW",
    })
    .promise();

      expect(usuarioAtualizado).toBe(true)
  });
});
