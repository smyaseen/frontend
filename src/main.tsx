import './index.css';
import './index.css';
import { NextUIProvider } from '@nextui-org/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './features/Auth/useCases/Login';
import SignUpPage from './features/Auth/useCases/Sign Up';
import GlobalLayout from './Layout';
import NotFoundPage from './notfound-page';

const router = createBrowserRouter([
  {
    children: [
      {
        element: <LoginPage />,
        path: '/signin',
      },
      {
        element: <SignUpPage />,
        path: '/signup',
      },
    ],
    element: <GlobalLayout />,
    errorElement: <NotFoundPage />,
    path: '/',
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>
);
