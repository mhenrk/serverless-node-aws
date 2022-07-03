const { v4 } = require("uuid");
const AWS = require("aws-sdk");

describe("Create User", () => {
  it("should be possible create a new user", async () => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const usuario = await dynamodb
      .put({
        TableName: "TabelaUsuario",
        Item: {
            id: v4(),
            nome: "Marcio",
            idade: "32",
            cargo: "Dev"
        },
      })
      .promise();

      console.log(usuario)

      expect(usuario.nome).toBe("Marcio")
  });
});
