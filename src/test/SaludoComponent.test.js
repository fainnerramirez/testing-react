import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SaludoComponent from "../components/Saludo.component";

describe("pruebas del archivo Saludo.component.js", () => {
  test('debe de mostrar el mensaje "Hola que tal!"', () => {
    const saludo = "Hola que tal!";

    render(<SaludoComponent saludo="Hola que tal!" />);

    expect(screen.getByText(saludo)).toBeInTheDocument();
  });
});
