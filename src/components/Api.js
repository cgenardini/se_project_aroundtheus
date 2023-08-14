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

  editUserAvatar() {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      headers: this._headers,
      method: "PATCH",
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

  //   getCardId(card) {
  //     return fetch(`${this.baseUrl}/cards`, {
  //       headers: this.headers,
  //       method: "GET",
  //       body: JSON.stringify({
  //         name: card.name,
  //         link: card.link,
  //       }),
  //     }).then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       }
  //       return Promise.reject(`Error: ${res.status}`);
  //     });
  //   }

  deleteCard(card) {
    console.log(card.id);
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

  likeCard() {
    return fetch(`${this._baseUrl}/cards/:cardId/likes`, {
      headers: this._headers,
      method: "PUT",
    });
  }

  dislikeCard() {
    return fetch(`${this._baseUrl}/cards/:cardId/likes`, {
      headers: this._headers,
      method: "DELETE",
    });
  }
}
