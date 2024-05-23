import { Button, Image } from '@nextui-org/react';
import { Link, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const AuthLayout = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex flex-col items-center justify-center gap-14 px-4 pb-0 pt-10">
      <div className="flex w-full flex-row justify-between">
        <div>
          <Image
            src="/logo.svg"
            alt="NextUI"
            className="hidden sm:block"
          />
          <Image
            src="/logo-sm.svg"
            alt="NextUI"
            className="block sm:hidden"
          />
        </div>
        <div className="flex flex-row items-center gap-4">
          <p className="hidden text-sm text-[#848fa3] sm:block">
            {pathname === '/signin' ? 'Don’t have an account?' : 'Already have an account?'}
          </p>
          <Button
            variant="bordered"
            radius="full"
            className="h-[2.6rem] w-[9.5rem] border-1 border-[#eaedf1] font-medium text-[#363e4e]"
            as={Link}
            to={pathname === '/signin' ? '/signup' : '/signin'}
          >
            {pathname === '/signin' ? 'Sign up' : 'Log in'}
          </Button>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default AuthLayout;
