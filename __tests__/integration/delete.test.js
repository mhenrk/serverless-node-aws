const AWS = require("aws-sdk");

describe("Delete User", () => {
  it("should be possible delete a user", async () => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const usuarioDeletado = await dynamodb
    .delete({
      TableName: "TabelaUsuario",
      Key: {
        // id: `${id}`
      },
    })
    .promise();

    expect(usuarioDeletado).toBe(true);
  });
});
