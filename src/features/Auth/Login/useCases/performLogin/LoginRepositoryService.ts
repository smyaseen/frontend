import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { createLoginApiAdapter, LoginResponse } from './LoginApiService';

export function useLogin(): UseMutationResult<
  LoginResponse,
  Error,
  {
    email: string;
    password: string;
  },
  unknown
> {
  const mutation = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }): Promise<LoginResponse> => {
      return createLoginApiAdapter(email, password)();
    },
  });

  return mutation;
}
