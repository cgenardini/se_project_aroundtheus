export default class UserInfo {
  constructor({ nameSelector, jobTitleSelector }) {
    this._name = document.querySelector(nameSelector);
    this._jobTitle = document.querySelector(jobTitleSelector);
  }

  getUserInfo() {
    const userInfo = {
      nameText: this._name.textContent,
      jobText: this._jobTitle.textContent,
    };
    return userInfo;
  }

  setUserInfo({ nameInput, jobInput }) {
    this._name.textContent = nameInput.value;
    this._jobTitle.textContent = jobInput.value;
  }
}
