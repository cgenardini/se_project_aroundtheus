export default class Api {
  constructor({ baseUrl, headers }) {
    (this._baseUrl = baseUrl), (this._headers = headers);
  }

  _checkResponses(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponses);
  }

  getInitialCards() {
    return this._request(`${this._baseUrl}/cards`, {
      headers: this._headers,
    });
  }

  getUserInfo() {
    return this._request(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    });
  }

  editUserInfo(info) {
    return this._request(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({
        name: info.name,
        about: info.about,
      }),
    });
  }

  editUserAvatar(info) {
    return this._request(`${this._baseUrl}/users/me/avatar`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({
        avatar: info.avatar,
      }),
    });
  }

  addNewCard(cards) {
    return this._request(`${this._baseUrl}/cards`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({
        name: cards.name,
        link: cards.link,
      }),
    });
  }

  deleteCard(card) {
    return this._request(`${this._baseUrl}/cards/${card.id}`, {
      headers: this._headers,
      method: "DELETE",
    });
  }

  likeCard(card) {
    return this._request(`${this._baseUrl}/cards/${card.id}/likes`, {
      headers: this._headers,
      method: "PUT",
    });
  }

  dislikeCard(card) {
    return this._request(`${this._baseUrl}/cards/${card.id}/likes`, {
      headers: this._headers,
      method: "DELETE",
    });
  }
}
