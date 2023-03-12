const BASE_URL = 'https://register.nomoreparties.co';
const BASE_URL2 = 'https://around.nomoreparties.co/v1/cohort-3-en';

const customFetch = (url, headers) => {
  return fetch(url, headers).then((res) =>
    res.ok ? res.json() : Promise.reject(res.statusText)
  );
};

module.exports = { BASE_URL, BASE_URL2, customFetch };
