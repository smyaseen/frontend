import { NextUIProvider } from '@nextui-org/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UserProvider } from '@/context/UserContext';

const TestWrapper = (children: React.ReactNode) => {
  const queryClient = new QueryClient();

  return (
    <NextUIProvider>
      <UserProvider>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </UserProvider>
    </NextUIProvider>
  );
};

export default TestWrapper;
