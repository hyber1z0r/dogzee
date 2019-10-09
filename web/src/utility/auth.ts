import decode from 'jwt-decode';

const KEY = 'token';

export const setToken = (token: string) => {
  localStorage.setItem(KEY, token);
};

export const getToken = (): string => {
  return localStorage.getItem(KEY) || '';
};

export const isExpired = (): boolean => {
  const token = getToken();
  if (!token) {
    return true;
  }

  const { exp } = decode(token);

  return exp * 1000 < Date.now();
};
