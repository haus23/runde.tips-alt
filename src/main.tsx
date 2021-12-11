import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import './styles.css';

// App
import App from './App';
import AppRoot from '@/core/AppRoot';

// Render app root
ReactDOM.render(
  <React.StrictMode>
    <AppRoot>
      <App />
    </AppRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
