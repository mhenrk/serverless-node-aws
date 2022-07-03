const { v4 } = require("uuid");
const AWS = require("aws-sdk");

describe("Read Users", () => {
  it("should be possible list all users", async () => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const listarTodosUsuarios = await dynamodb
      .scan({ TableName: "TabelaUsuario" })
      .promise();

    expect(listarTodosUsuarios).toBe(true);
  });
});
