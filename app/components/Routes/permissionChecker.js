import { AUTH_TOKEN } from '../../utils/constants/constants';

export const isAuthenticated = () => {
  if (typeof window === 'undefined') return true;
  const data = window.localStorage.getItem(AUTH_TOKEN);

  if (data) {
    const token = JSON.parse(data).token.accessToken;
    if (token) return token;
  }
  return false;
};
