import { BASE_URL, customFetch } from './constants-and-rep-code';

export const signInOrUp = (email, pass, inOrUp) => {
  customFetch(`${BASE_URL}/sign-${inOrUp}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, pass }),
  });
};

export const checkToken = (token) => {
  fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};
module.exports = {
  signInOrUp,
  checkToken,
};
