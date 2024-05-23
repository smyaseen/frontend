import Cookies from 'js-cookie';
import { TOKEN_ENUM } from '@/types';

export const performLogOut = () => {
  Cookies.remove(TOKEN_ENUM.AccessToken);
  Cookies.remove(TOKEN_ENUM.RefreshToken);
};
