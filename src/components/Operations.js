import PropTypes from 'prop-types';

const Operations = (props) => {
  const { handleButtonClick } = props;
  return (
    <div id="operations">
      <button type="button" id="÷" className="operation" onClick={() => handleButtonClick('÷')}>÷</button>
      <button type="button" id="x" className="operation" onClick={() => handleButtonClick('x')}>x</button>
      <button type="button" id="-" className="operation" onClick={() => handleButtonClick('-')}>-</button>
      <button type="button" id="+" className="operation" onClick={() => handleButtonClick('+')}>+</button>
      <button type="button" id="=" className="operation" onClick={() => handleButtonClick('=')}>=</button>
    </div>
  );
};

Operations.propTypes = {
  handleButtonClick: PropTypes.func.isRequired,
};

export default Operations;
