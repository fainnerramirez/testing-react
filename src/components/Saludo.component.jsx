import PropTypes from "prop-types";

const SaludoComponent = ({ saludo, subtitulo }) => {
  return (
    <div>
      <h1>{saludo}</h1>
      <h3>{subtitulo}</h3>
    </div>
  );
};

SaludoComponent.prototype = {
  saludo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string.isRequired,
};

export default SaludoComponent;
