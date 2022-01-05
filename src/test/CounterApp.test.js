import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe("Pruebas en el componente <CounterApp />", () => {
  let view = shallow(<CounterApp />);

  beforeEach(() => {
    view = shallow(<CounterApp />);
  });

  test("se debe mostrar correctamente <CounterApp />", () => {
    expect(view).toMatchSnapshot();
  });

  test("debe de mostrar el valor por defecto de 100", () => {
    const valor = "100";
    const view = shallow(<CounterApp value={100} />);
    const textoParrafo = view.find("h1").text().trim();
    expect(textoParrafo).toBe(valor);
  });

  test("Debe de incrementar el valor de count con el boton de 'increment'", () => {
    view.find("button").at(0).simulate("click");
    const textCount = view.find("h1").text().trim();
    expect(textCount).toBe("101");
  });

  test("Debe de decrementar el valor de count con el boton de 'decrement'", () => {
    view.find("button").at(2).simulate("click");
    const textCount = view.find("h1").text().trim();
    expect(textCount).toBe("99");
  });

  test("Debe poner el valor por defecto al darle click en el boton de reset", () => {
    const view = shallow(<CounterApp value={345} />);
    view.find("button").at(1).simulate("click");
    const textCount = view.find("h1").text().trim();
    expect(textCount).toBe("345");
  });
});
