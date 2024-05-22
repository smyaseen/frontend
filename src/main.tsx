import './index.css';
import { NextUIProvider } from '@nextui-org/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import AuthPage from './features/Auth';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <AuthPage />
    </NextUIProvider>
  </React.StrictMode>
);
