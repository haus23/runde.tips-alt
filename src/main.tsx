import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import './styles.css';

// App
import App from './App';

// React root
const container = document.getElementById('app');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  container
);
