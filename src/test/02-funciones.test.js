import { getUser, getUserActivo } from "../base/02-funciones";

describe("pruebas en el archivo 02-funciones.js", () => {
  test("getUser debe retornar un objeto", () => {
    const userTest = {
      uid: 12345,
      username: "fainner",
    };

    const user = getUser();

    expect(user).toEqual(userTest);
  });

  //con parámetro nombre

  test("la prueba debe retornar un objeto dependiendo el nombre", () => {
    const userTest = {
      uid: "ABC123",
      username: "FAINNER",
    };

    const user = getUserActivo("FAINNER");

    expect(user).toEqual(userTest);
  });
});
