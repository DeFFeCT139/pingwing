import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './css/style.css'
import Pingwing from './components/site/pingwing';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode> 
    <BrowserRouter>
      <Pingwing/>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();