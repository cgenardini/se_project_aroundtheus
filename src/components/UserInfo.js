export default class UserInfo {
  constructor({ nameSelector, jobTitleSelector }) {
    this._name = document.querySelector(nameSelector);
    this._jobTitle = document.querySelector(jobTitleSelector);
  }

  getUserInfo() {
    const userInfo = {
      userName: this._name.textContent,
      userJob: this._jobTitle.textContent,
    };
    return userInfo;
  }

  setUserInfo({ nameInput, jobInput }) {
    this._name.textContent = nameInput;
    this._jobTitle.textContent = jobInput;
  }
}
