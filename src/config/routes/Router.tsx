import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '@/features/Auth/Login/useCases/performLogin';
import SignUpPage from '@/features/Auth/Sign Up/useCases/performSignUp';
import GlobalLayout from '@/Layout';
import NotFoundPage from '@/notfound-page';

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

export default router;
