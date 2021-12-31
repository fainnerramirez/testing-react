import PropTypes from "prop-types";
import { useState } from "react";
import "./App.css";

const CounterApp = ({ value }) => {
  const [count, setCount] = useState(value);

  const handleClick = () => setCount((c) => c + 1);
  const handleReset = () => setCount(value);
  const handleSubstract = () => setCount((c) => c - 1);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={handleClick}>increment</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubstract}>Decrement</button>
    </div>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
  value: 0,
};

export default CounterApp;
