import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';

import GlobalStyle from './globalStyle/globalStyle';
import { RegisterProvider } from './contexts/registerContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  
  <React.StrictMode>
    <BrowserRouter>
    <RegisterProvider>
      <GlobalStyle />
      <App />
    </RegisterProvider>
    </BrowserRouter>
  </React.StrictMode>
);
