import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe("Pruebas en el componente <CounterApp />", () => {
  const view = shallow(<CounterApp />);

  test("se debe mostrar correctamente <CounterApp />", () => {
    expect(view).toMatchSnapshot();
  });

  test("debe de mostrar el valor por defecto de 100", () => {
    const valor = "100";
    const view = shallow(<CounterApp value={100} />);
    const textoParrafo = view.find("h1").text().trim();
    expect(textoParrafo).toBe(valor);
  });

  test("Debe de incrementar el valor de count con el boton de '+'", () => {
    view.find("button").at(0).simulate("click");

    const textCount = view.find("h1").text().trim();

    console.log("click event", textCount);

    expect(textCount).toBe("101");
  });
});