export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._closeButton = this._popupElement.querySelector(".modal__close");
  }

  open() {
    this._popupElement.classList.add("modal_open");
    this.setEventListeners();
  }

  close() {
    this._popupElement.classList.remove("modal_open");
    this.removeEventListeners();
  }

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  _handleClickOutside = (evt) => {
    if (evt.target.classList.contains("modal_open")) {
      this.close();
    }
  };

  _handleCloseButtons = () => {
    this.close();
  };

  setEventListeners() {
    document.addEventListener("mousedown", this._handleClickOutside);
    document.addEventListener("keydown", this._handleEscClose);

    this._closeButton.addEventListener("click", this._handleCloseButtons);
  }

  removeEventListeners() {
    document.removeEventListener("mousedown", this._handleClickOutside);
    document.removeEventListener("keydown", this._handleEscClose);
    this._closeButton.removeEventListener("click", this._handleCloseButtons);
  }
}
