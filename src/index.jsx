import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import './index.css';

// Conditional import for theme selection.
if ( localStorage.getItem('theme') === 'dark' ) {
  import('./themes/Dark.css');
}
else {
  import('./themes/Light.css');
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
