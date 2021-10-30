import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import './styles.css';

// App
import { App } from '~/App';
import { AppProvider } from '~/common/context';

// React root
const container = document.getElementById('app');

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  container
);
