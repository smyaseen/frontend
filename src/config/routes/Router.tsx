import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '@/features/Auth/Login/useCases/performLogin';
import SignUpPage from '@/features/Auth/Sign Up/useCases/performSignUp';
import DashboardPage from '@/features/Dashboard';
import GlobalLayout from '@/Layout';
import NotFoundPage from '@/notfound-page';
import RouteNames from './RouteNames';

const router = createBrowserRouter([
  {
    children: [
      {
        element: <LoginPage />,
        path: RouteNames.signin,
      },
      {
        element: <SignUpPage />,
        path: RouteNames.signup,
      },
      {
        element: <DashboardPage />,
        path: RouteNames.dashboard,
      },
    ],
    element: <GlobalLayout />,
    errorElement: <NotFoundPage />,
    path: '/',
  },
]);

export default router;
