import React from 'react';
import ReactDOM from 'react-dom/client';
import DynamicBox from './DynamicBox';
import reportWebVitals from './reportWebVitals';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DynamicBox size="100" color="green" />
  </React.StrictMode>
);

reportWebVitals();
