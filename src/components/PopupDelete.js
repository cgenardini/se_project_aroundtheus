import Popup from "./Popup.js";

export default class PopupDelete extends Popup {
  constructor(popupSelector, deleteButtonSelector, handleDeleteButton) {
    super(popupSelector);
    this._popupButton = this._popupElement.querySelector(deleteButtonSelector);
    this._handleDeleteButton = handleDeleteButton;
  }

  setEventListeners() {
    this._popupButton.addEventListener("click", this._handleDeleteSubmit);
    super.setEventListeners();
  }

  removeEventListeners() {
    this._popupButton.removeEventListener("click", this._handleDeleteSubmit);
    super.removeEventListeners();
  }

  _handleDeleteSubmit = () => {
    this._handleDeleteButton();
  };
}
