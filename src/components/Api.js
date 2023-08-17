export default class Api {
  constructor({ baseUrl, headers }) {
    (this._baseUrl = baseUrl), (this._headers = headers);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  getCardId() {
    return;
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  editUserInfo(info) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({
        name: info.name,
        about: info.about,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  editUserAvatar(info) {
    console.log(info);
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({
        avatar: info.avatar,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  addNewCard(cards) {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({
        name: cards.name,
        link: cards.link,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  deleteCard(card) {
    return fetch(`${this._baseUrl}/cards/${card.id}`, {
      headers: this._headers,
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        return res;
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  likeCard(card) {
    return fetch(`${this._baseUrl}/cards/${card.id}/likes`, {
      headers: this._headers,
      method: "PUT",
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  dislikeCard(card) {
    return fetch(`${this._baseUrl}/cards/${card.id}/likes`, {
      headers: this._headers,
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }
}
