// import Roles from './Roles';
import Roles from './Roles';
import RouteNames from './RouteNames';

const routeConfig: Record<
  string,
  {
    [path: string]: string;
    default: string;
  }
> = {
  [Roles.customer]: {
    [RouteNames.dashboard]: RouteNames.dashboard,
    default: RouteNames.dashboard,
  },
  auth: {
    [RouteNames.signin]: RouteNames.signin,
    [RouteNames.signup]: RouteNames.signup,
    default: RouteNames.signin,
  },
  //   public: {}
};

export default routeConfig;
