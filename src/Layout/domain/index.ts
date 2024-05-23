import Cookies from 'js-cookie';

const parseJwt = (token: string): { username: string; role: string } => {
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

  return JSON.parse(jsonPayload) as { username: string; role: string };
};

export const getDecodedAccessToken = (): { name: string; role: string } | null => {
  const token = Cookies.get('accessToken');

  if (!token) {
    return null;
  }

  const decodedToken = parseJwt(token);

  return { name: decodedToken.username, role: decodedToken.role };
};
