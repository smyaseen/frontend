import { Spinner } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Roles from '@/config/routes/Roles';
import routeConfig from '@/config/routes/RouteConfig';
import { IUser, useUser } from '@/context/UserContext';
import DashboardPage from '@/features/Dashboard';
import AuthLayout from './AuthLayout';
import { performTokenValidation } from './domain';

const GlobalLayout = () => {
  const { setUser, user } = useUser();
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [isValidRoute, setIsValidRoute] = useState(false);

  useEffect(() => {
    void performTokenValidation(
      (userData: IUser) => {
        setUser(userData);
      },
      () => {
        setIsLoading(false);
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (user?.name && user?.role) {
      if (!Roles[user.role]) {
        //
      } else if (!routeConfig[user.role]) {
        console.error(`Unrecognized role: ${user.role}`);
        // handle error...
      } else if (!routeConfig[user.role][pathname]) {
        setIsValidRoute(false);
        navigate(routeConfig[user.role].default);
      } else {
        setIsValidRoute(true);
      }
    } else {
      if (!routeConfig.auth[pathname] && pathname !== '/public-route') {
        setIsValidRoute(false);
        navigate(routeConfig.auth.default);
      } else {
        setIsValidRoute(true);
      }
    }
  }, [user?.name, user?.role, navigate, pathname, user]);

  return isLoading ? (
    <div className="flex min-h-screen items-center justify-center">
      <Spinner />
    </div>
  ) : isValidRoute ? (
    user?.name ? (
      <DashboardPage />
    ) : (
      <AuthLayout />
    )
  ) : null;
};

export default GlobalLayout;
