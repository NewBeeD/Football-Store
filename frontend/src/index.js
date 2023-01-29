import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { EcomContextProvider } from './context/EcommContext'; 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <EcomContextProvider>
      <App />
      </EcomContextProvider>
    </BrowserRouter>

  </React.StrictMode>
);


