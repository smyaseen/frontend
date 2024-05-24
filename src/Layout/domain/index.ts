import Cookies from 'js-cookie';
import { IUser } from '@/context/UserContext';
import { storeUserAuthInfoInCookie } from '@/features/Auth/domain';
import { LoginResponse } from '@/features/Auth/Login/useCases/performLogin/login.api.service';
import { IToken, TOKEN_ENUM } from '@/types';
import { VITE_API_URL } from '@/utils/constants';

export const parseJwt = (token: string): { username: string; role: string; exp: number } => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join('')
  );

  return JSON.parse(jsonPayload) as { username: string; role: string; exp: number };
};

const getToken = (type: IToken): string | undefined => {
  return Cookies.get(type);
};

const decodeToken = (token: string): { name: string; role: string; exp: number } => {
  const decodedToken = parseJwt(token);
  return { exp: decodedToken.exp, name: decodedToken.username, role: decodedToken.role };
};

export const getDecodedToken = (type: IToken): { name: string; role: string; exp: number } | null => {
  const token = getToken(type);
  return token ? decodeToken(token) : null;
};

const fetchAndDecodeToken = (type: IToken): { name: string; role: string; exp: number } | null => {
  const token = getToken(type);
  return token ? decodeToken(token) : null;
};

const performTokenRefresh = async (): Promise<IUser | void> => {
  try {
    const refreshToken = getToken(TOKEN_ENUM.RefreshToken);

    if (!refreshToken) {
      return;
    }

    const response = await fetch(`${VITE_API_URL}/auth/refresh`, {
      body: JSON.stringify({ refreshToken }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    if (response.ok) {
      const data = (await response.json()) as LoginResponse;

      if (!data.data?.tokens?.accessToken || !data.data.tokens.refreshToken) {
        return;
      }

      const userData = data.data;

      const accessTokenInfo = decodeToken(userData?.tokens?.accessToken ?? '');
      const refreshTokenInfo = decodeToken(userData?.tokens?.refreshToken ?? '');

      storeUserAuthInfoInCookie({
        accessToken: {
          exp: accessTokenInfo?.exp ?? 0,
          value: userData?.tokens?.accessToken ?? '',
        },
        refreshToken: {
          exp: refreshTokenInfo?.exp ?? 0,
          value: userData?.tokens?.refreshToken ?? '',
        },
      });

      return {
        accessToken: userData?.tokens?.accessToken,
        name: userData?.user?.name ?? '',
        refreshToken: userData?.tokens?.refreshToken,
        role: userData?.user?.role ?? '',
      };
    }

    return;
  } catch (_error) {
    //
  }
};

const checkRefreshToken = async (): Promise<IUser | void> => {
  const refreshTokenInfo = fetchAndDecodeToken(TOKEN_ENUM.RefreshToken);
  if (refreshTokenInfo && refreshTokenInfo.exp * 1000 > Date.now()) {
    return await performTokenRefresh();
  }
  Cookies.remove(TOKEN_ENUM.RefreshToken);
};

export const performTokenValidation = async (setUser: (user: IUser) => void, setIsLoadingFalse: () => void) => {
  const userAuthInfo = fetchAndDecodeToken(TOKEN_ENUM.AccessToken);

  if (userAuthInfo && userAuthInfo.exp * 1000 > Date.now()) {
    setUser({
      accessToken: getToken(TOKEN_ENUM.AccessToken),
      name: userAuthInfo.name,
      refreshToken: getToken(TOKEN_ENUM.RefreshToken),
      role: userAuthInfo.role,
    });
  } else {
    Cookies.remove(TOKEN_ENUM.AccessToken);
    const user = await checkRefreshToken();
    if (user) {
      setUser(user);
    }
  }

  setIsLoadingFalse();
};
