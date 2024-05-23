import { Button } from '@nextui-org/react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { initialUserState, useUser } from '@/context/UserContext';
import { performLogOut } from './domain';

const DashboardPage = () => {
  const { setUser, user } = useUser();

  const handleLogout = () => {
    setUser(initialUserState);
    performLogOut();
  };

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
          <div className="mx-auto max-w-screen-sm text-center">
            <p className="mb-4 text-3xl font-bold tracking-tight text-[#F26838]">Welcome to Easy Generator</p>
            <p className="mb-4 text-lg font-normal text-[#3AB881]">{user?.name ? `Hello, ${user.name}!` : 'Hello!'}</p>

            <Button
              className="bg-[#F26838] font-normal text-white"
              href="/"
              radius="full"
              as={Link}
              onClick={handleLogout}
              variant="solid"
            >
              Log Out
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardPage;
