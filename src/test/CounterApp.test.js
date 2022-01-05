import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe("Pruebas en el componente <CounterApp />", () => {
  test("se debe mostrar correctamente <CounterApp />", () => {
    const view = shallow(<CounterApp />);

    expect(view).toMatchSnapshot();
  });

  test("debe de mostrar el valor por defecto de 100", () => {
    const valor = "100";

    const view = shallow(<CounterApp value={100} />);

    const textoParrafo = view.find("h1").text().trim();

    console.log(textoParrafo);

    expect(textoParrafo).toBe(valor);
  });
});
