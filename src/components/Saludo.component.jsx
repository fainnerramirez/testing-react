import PropTypes from "prop-types";

const SaludoComponent = ({ saludo }) => {
  return (
    <div>
      <h1>{saludo}</h1>
      <h3>Esto es un subtitulo</h3>
    </div>
  );
};

SaludoComponent.prototype = {
  saludo: PropTypes.string.isRequired,
};

export default SaludoComponent;
