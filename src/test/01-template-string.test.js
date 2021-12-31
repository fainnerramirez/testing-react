import "@testing-library/jest-dom";
import { getSaludo } from "../base/01-template-string";

describe("Pruebas en el archivo 01-template-string.js", () => {
  test("prueba en el método getSaludo", () => {
    const nombre = "Fainner";
    const saludo = getSaludo(nombre);
    expect(saludo).toBe("Hola " + nombre);
  });

  //prueba si el nombre no se pasa por parámetro

  test("La función getSaludo debe retornar Hola carlos", () => {
    const saludo = getSaludo();
    expect(saludo).toBe("Hola Carlos");
  });
});
