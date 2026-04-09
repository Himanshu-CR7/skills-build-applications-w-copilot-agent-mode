import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// Set REACT_APP_CODESPACE_URL from environment or fallback for local dev
if (!process.env.REACT_APP_CODESPACE_URL) {
  // You can set this in your .env file or here for local testing
  process.env.REACT_APP_CODESPACE_URL = window.REACT_APP_CODESPACE_URL || 'http://localhost:8000';
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
