import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CounterApp from "./CounterApp";
//import SaludoComponent from "./components/Saludo.component";

ReactDOM.render(
  <React.StrictMode>
    {/*<SaludoComponent saludo="Hola que tal!" subtitulo="Esto es un subtitulo" />*/}
    <CounterApp />
  </React.StrictMode>,
  document.getElementById("root")
);
