import { BASE_URL, customFetch } from './constants-and-rep-code';

export const signUp = ({ email, pass }) => {
  customFetch(`${BASE_URL}/sign-up`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `6efb715f-3f27-47aa-b11b-00d476bb80a2`,
    },
    body: JSON.stringify({ email, pass }),
  });
};

export const signIn = (email, pass) => {
  customFetch(`${BASE_URL}/sign-in`, {
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
      Authorization: `'6efb715f-3f27-47aa-b11b-00d476bb80a2'`,
    },
  });
};
