import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { createSignUpApiAdapter, SignUpResponse } from './SignUpApiService';

export function useSignUp(): UseMutationResult<
  SignUpResponse,
  Error,
  {
    email: string;
    password: string;
    fullName: string;
  },
  unknown
> {
  const mutation = useMutation({
    mutationFn: ({
      email,
      fullName,
      password,
    }: {
      email: string;
      password: string;
      fullName: string;
    }): Promise<SignUpResponse> => {
      return createSignUpApiAdapter({ email, fullName, password })();
    },
  });

  return mutation;
}
