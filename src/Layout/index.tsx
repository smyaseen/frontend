import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Roles from '@/config/routes/Roles';
import routeConfig from '@/config/routes/RouteConfig';
import AuthLayout from './AuthLayout';

const GlobalLayout = () => {
  const isLoggedIn = false;
  const role = 'auth';

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [isValidRoute, setIsValidRoute] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      if (!Roles[role]) {
        //
      } else if (!routeConfig[role]) {
        console.error(`Unrecognized role: ${role}`);
        // handle error...
      } else if (!routeConfig[role][pathname]) {
        setIsValidRoute(false);
        navigate(routeConfig[role].default);
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
  }, [isLoggedIn, role, navigate, pathname]);

  return isValidRoute ? isLoggedIn ? <div>Private Layout</div> : <AuthLayout /> : null;
};

export default GlobalLayout;
