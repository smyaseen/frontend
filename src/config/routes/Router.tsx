import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '@/features/Auth/useCases/Login';
import GlobalLayout from '@/Layout';
import NotFoundPage from '@/notfound-page';
import SignUpPage from '../../features/Auth/useCases/Sign Up';

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
