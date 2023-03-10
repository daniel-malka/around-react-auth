import { BASE_URL, customFetch } from './constants-and-rep-code';

export class Api {
  constructor(settings) {
    this._baseUrl = settings.baseUrl;
    this._headers = settings.headers;
  }
  getCards() {
    customFetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    });
  }
  getUserInfo() {
    customFetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    });
  }

  setUserInfo({ name, about }) {
    customFetch(`${this._baseUrl}/users/me`, {
      headers: {
        ...this._headers,
        method: 'PATCH',
        body: JSON.stringify({
          name,
          about,
        }),
      },
    });
  }

  addCard({ name, link }) {
    customFetch(`${this._baseUrl}/cards`, {
      headers: {
        ...this._headers,
        method: 'POST',
        body: JSON.stringify({
          name,
          link,
        }),
      },
    });
  }
  editAvatar(avatar) {
    customFetch(`${this._baseUrl}/users/me/avatar`, {
      headers: {
        ...this._headers,
        method: 'PATCH',
        body: JSON.stringify({
          avatar,
        }),
      },
    });
  }
  deleteCard(cardId) {
    customFetch(`${this._baseUrl}/cards/${cardId}`, {
      headers: { ...this._headers, method: 'DELETE' },
    });
  }
  dislikeCard(id) {
    customFetch(`${this._baseUrl}/cards/likes/${id}`, {
      headers: { ...this._headers, method: 'DELETE' },
    });
  }
  likeCard(id) {
    customFetch(`${this._baseUrl}/cards/likes/${id}`, {
      headers: { ...this._headers, method: 'PUT' },
    });
  }
}
const api = new Api({
  baseUrl: BASE_URL,
  headers: {
    Authorization: '6efb715f-3f27-47aa-b11b-00d476bb80a2',
    'Content-Type': 'application/json',
  },
});
export default api;
