import React, { useState } from 'react';
import calculate from '../logic/calculate';
import OutputScreen from './OutputScrean';
import Operations from './Operations';
import InputButtons from './Buttons';

const Calculator = () => {
  const [calcState, setCalcState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonName) => {
    const newState = calculate(calcState, buttonName);
    setCalcState(newState);
  };

  return (
    <div id="calculator-container">
      <OutputScreen calcState={calcState} />
      <section id="input-screen">
        <InputButtons handleButtonClick={handleButtonClick} />
        <Operations handleButtonClick={handleButtonClick} />
      </section>
    </div>
  );
};

export default Calculator;
