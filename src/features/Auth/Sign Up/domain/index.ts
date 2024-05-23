import Cookies from 'js-cookie';

export const storeUserAuthInfoInCookie = (accessToken: string, refreshToken: string) => {
  Cookies.set('accessToken', accessToken, { expires: 7 }); // expires after 7 days
  Cookies.set('refreshToken', refreshToken, { expires: 7 }); // expires after 7 days
};
