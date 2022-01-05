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
});
