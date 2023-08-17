import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._popupForm = this._popupElement.querySelector(".modal__container");
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    const inputFields = this._popupForm.querySelectorAll(".modal__input");
    const inputData = {};
    inputFields.forEach((input) => {
      inputData[input.name] = input.value;
    });
    return inputData;
  }

  setEventListeners() {
    this._popupForm.addEventListener("submit", this._handleSubmitListener);
    super.setEventListeners();
  }

  removeEventListeners() {
    this._popupForm.removeEventListener("submit", this._handleSubmitListener);
    super.removeEventListeners();
  }

  _handleSubmitListener = (evt) => {
    evt.preventDefault();
    this._handleFormSubmit(this._getInputValues());
  };

  close() {
    this._popupForm.reset();
    super.close();
  }
}
