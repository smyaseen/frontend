import Cookies from 'js-cookie';

export const storeUserAuthInfoInCookie = ({
  accessToken,
  refreshToken,
}: {
  accessToken: {
    value: string;
    exp: number;
  };
  refreshToken: {
    value: string;
    exp: number;
  };
}) => {
  Cookies.set('accessToken', accessToken.value, { expires: new Date(accessToken.exp * 1000) });
  Cookies.set('refreshToken', refreshToken.value, { expires: new Date(refreshToken.exp * 1000) });
};
