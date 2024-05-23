import { useUser } from '@/context/UserContext';

const DashboardPage = () => {
  const { user } = useUser();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {user?.name}</p>
      <p>Your role is: {user?.role}</p>
    </div>
  );
};

export default DashboardPage;
