import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import CalculatorPage from './Calculator';
import Quote from './Quote';

function App() {
  return (
    <div className="App">
      <nav>
        <h1 className="title">
          Math Magician
        </h1>
        <ul className="nav-icons">
          <li className="nav-link"><Link to="/">Home</Link></li>
          <li className="nav-link"><Link to="/cal">Calculate</Link></li>
          <li className="nav-link"><Link to="/quote">TodayQuote</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cal" element={<CalculatorPage />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </div>
  );
}

export default App;
