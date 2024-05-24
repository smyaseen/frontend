import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import RouteNames from '@/config/routes/RouteNames';
import { useUser } from '@/context/UserContext';
import { parseJwt } from '@/Layout/domain';
import { storeUserAuthInfoInCookie } from '../../../domain';
import { createSignUpApiAdapter, SignUpResponse } from './SignUpApiService';

export function useSignUp(): UseMutationResult<
  SignUpResponse,
  Error,
  {
    email: string;
    password: string;
    name: string;
  },
  unknown
> {
  const { setUser } = useUser();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: ({
      email,
      name,
      password,
    }: {
      email: string;
      password: string;
      name: string;
    }): Promise<SignUpResponse> => {
      return createSignUpApiAdapter({ email, name, password })();
    },
    onSuccess(data) {
      if (data.data) {
        const userData = data.data;

        setUser({
          accessToken: userData?.tokens?.accessToken ?? '',
          name: userData?.user?.name ?? '',
          refreshToken: userData?.tokens?.refreshToken ?? '',
          role: userData?.user?.role ?? '',
        });

        const { exp: accessTokenExp } = parseJwt(userData?.tokens?.accessToken ?? '');
        const { exp: refreshTokenExp } = parseJwt(userData?.tokens?.refreshToken ?? '');

        storeUserAuthInfoInCookie({
          accessToken: {
            exp: accessTokenExp,
            value: userData?.tokens?.accessToken ?? '',
          },
          refreshToken: {
            exp: refreshTokenExp,
            value: userData?.tokens?.refreshToken ?? '',
          },
        });
        navigate(RouteNames.dashboard);
      }
    },
  });

  return mutation;
}

export default useSignUp;
