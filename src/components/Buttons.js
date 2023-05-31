import PropTypes from 'prop-types';

const InputButtons = (props) => {
  const { handleButtonClick } = props;
  return (
    <div id="input-buttons">
      <button type="button" id="AC" className="input" onClick={() => handleButtonClick('AC')}>AC</button>
      <button type="button" id="+/-" className="input" onClick={() => handleButtonClick('+/-')}>+/-</button>
      <button type="button" id="%" className="input" onClick={() => handleButtonClick('%')}>%</button>
      <button type="button" id="7" className="input" onClick={() => handleButtonClick('7')}>7</button>
      <button type="button" id="8" className="input" onClick={() => handleButtonClick('8')}>8</button>
      <button type="button" id="9" className="input" onClick={() => handleButtonClick('9')}>9</button>
      <button type="button" id="4" className="input" onClick={() => handleButtonClick('4')}>4</button>
      <button type="button" id="5" className="input" onClick={() => handleButtonClick('5')}>5</button>
      <button type="button" id="6" className="input" onClick={() => handleButtonClick('6')}>6</button>
      <button type="button" id="1" className="input" onClick={() => handleButtonClick('1')}>1</button>
      <button type="button" id="2" className="input" onClick={() => handleButtonClick('2')}>2</button>
      <button type="button" id="3" className="input" onClick={() => handleButtonClick('3')}>3</button>
      <button type="button" id="0" className="input wide" onClick={() => handleButtonClick('0')}>0</button>
      <button type="button" id="." className="input" onClick={() => handleButtonClick('.')}>.</button>
    </div>
  );
};

InputButtons.propTypes = {
  handleButtonClick: PropTypes.func.isRequired,
};

export default InputButtons;
