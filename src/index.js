import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DisplayQuote from './components/DisplayQuote';
import reportWebVitals from './reportWebVitals';

const enableStrictMode = true; // Set to true or false based on your requirements

const rootElement = document.getElementById('root');
const displayQuoteElement = document.getElementById('display-quote-root');

if (enableStrictMode) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootElement,
  );
} else {
  ReactDOM.render(
    <>
      <DisplayQuote />
    </>,
    rootElement,
  );
  ReactDOM.unmountComponentAtNode(displayQuoteElement);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
