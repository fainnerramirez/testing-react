import React from "react";
import "@testing-library/jest-dom";
//import { render, screen } from "@testing-library/react";
//import SaludoComponent from "../components/Saludo.component";

import { shallow } from "enzyme";
import SaludoComponent from "../components/Saludo.component";

describe("pruebas del archivo Saludo.component.js", () => {
  /*test('debe de mostrar el mensaje "Hola que tal!"', () => {
    const saludo = "Hola que tal!";

    render(<SaludoComponent saludo="Hola que tal!" />);

    expect(screen.getByText(saludo)).toBeInTheDocument();
  });*/

  test("debe de mostrar el componente <SaludoComponent /> correctamente", () => {
    const saludo = "Hola que tal!";

    const view = shallow(<SaludoComponent saludo={saludo} />);

    expect(view).toMatchSnapshot();
  });

  test("debe de mostrar el subititulo mostardo por props", () => {
    const saludo = "Hola que tal!";
    const subtitulo = "Esto es un subtitulo";

    const view = shallow(
      <SaludoComponent saludo={saludo} subtitulo={subtitulo} />
    );

    const textoParrafo = view.find("h3").text();

    console.log(textoParrafo);

    expect(textoParrafo).toBe(subtitulo);
  });
});
