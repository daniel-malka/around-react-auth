import { BASE_URL, BASE_URL2, customFetch } from './constants-and-rep-code';

export class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getCards() {
    return customFetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    });
  }
  getUserInfo() {
    return customFetch(`${this._baseUrl}/users/me`, {
      headers: { ...this._headers },
    });
  }

  setUserInfo({ name, about }) {
    return customFetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,

      body: JSON.stringify({
        name,
        about,
      }),
    });
  }

  addCard({ name, link }) {
    return customFetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name,
        link,
      }),
    });
  }
  editAvatar(avatar) {
    return customFetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,

      body: JSON.stringify({
        avatar: avatar,
      }),
    });
  }
  deleteCard(cardId) {
    return customFetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: { ...this._headers },
    });
  }
  dislikeCard(id) {
    return customFetch(`${this._baseUrl}/cards/likes/${id}`, {
      method: 'DELETE',
      headers: { ...this._headers },
    });
  }
  likeCard(id) {
    return customFetch(`${this._baseUrl}/cards/likes/${id}`, {
      method: 'PUT',
      headers: { ...this._headers },
    });
  }
}
const api = new Api({
  baseUrl: BASE_URL2,
  headers: {
    Accept: 'application/json',
    Authorization: 'dabe6f5b-76a9-454b-a126-949e6970cf03',
    'Content-Type': 'application/json',
  },
});
export default api;
