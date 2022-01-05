import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
import SaludoComponent from "./components/Saludo.component";

ReactDOM.render(
  <React.StrictMode>
    <SaludoComponent saludo="Hola que tal!" />
  </React.StrictMode>,
  document.getElementById("root")
);
