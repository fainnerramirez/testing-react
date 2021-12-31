import { getUser } from "../base/02-funciones";

describe("pruebas en el archivo 02-funciones.js", () => {
  test("getUser debe retornar un objeto", () => {
    const userTest = {
      uid: 12345,
      username: "fainner",
    };

    const user = getUser();

    console.log(user);

    expect(user).toBe(userTest);
  });
});
