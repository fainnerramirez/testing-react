import "@testing-library/jest-dom";
import { getSaludo } from "../base/01-template-string";

describe("Pruebas en el archivo 01-template-string.js", () => {
  test("prueba en el método getSaludo", () => {
    const nombre = "Fainner";

    const saludo = getSaludo(nombre);

    expect(saludo).toBe("Hola" + nombre);
  });
});
