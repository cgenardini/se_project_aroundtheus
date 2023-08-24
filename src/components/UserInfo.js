export default class UserInfo {
  constructor({ nameSelector, jobTitleSelector, avatarSelector }) {
    this._name = document.querySelector(nameSelector);
    this._jobTitle = document.querySelector(jobTitleSelector);
    this._avatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    const userInfo = {
      name: this._name.textContent,
      about: this._jobTitle.textContent,
    };
    return userInfo;
  }

  setUserInfo({ nameInput, jobInput }) {
    this._name.textContent = nameInput;
    this._jobTitle.textContent = jobInput;
  }

  setUserAvatar({ avatarInput }) {
    this._avatar.src = avatarInput;
  }
}
