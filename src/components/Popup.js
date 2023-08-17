import { closeButtons } from "../utils/constants.js";

export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._submitButtonElement =
      this._popupElement.querySelector(".modal__button");
    this._saveButtonElement = this._popupElement.querySelector(
      ".modal__loading-button"
    );
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

  uploadingInfo(isloading) {
    if (isloading) {
      this._submitButtonElement.classList.add("modal_button_saving");
      this._submitButtonElement.textContent = "Saving...";
    } else {
      this._submitButtonElement.classList.remove("modal_button_saving");
      this._submitButtonElement.textContent = "Save";
    }
  }

  _handleClickOutside = (evt) => {
    if (evt.target.classList.contains("modal_open")) {
      this.close();
    }
  };

  _handleCloseButtons = () => {
    closeButtons.forEach((button) => {
      button.addEventListener("click", () => this.close());
    });
  };

  setEventListeners() {
    document.addEventListener("mousedown", this._handleClickOutside);
    document.addEventListener("keydown", this._handleEscClose);

    document.addEventListener("click", this._handleCloseButtons);
  }

  removeEventListeners() {
    document.removeEventListener("mousedown", this._handleClickOutside);
    document.removeEventListener("keydown", this._handleEscClose);
    document.removeEventListener("click", this._handleCloseButtons);
  }
}
