import './App.css';
import Calculator from './components/Calculator';
import DisplayQuote from './components/DisplayQuote';

function App() {
  return (
    <div className="App">
      <div className="section1">
        <div id="calculator">
          <Calculator />
        </div>
        <div id="qoutecontainer">
          <h1>Quote of the day</h1>
          <DisplayQuote />
        </div>
      </div>
    </div>
  );
}

export default App;
