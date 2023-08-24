import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._popupForm = this._popupElement.querySelector(".modal__container");
    this._handleFormSubmit = handleFormSubmit;
    this._submitButtonElement =
      this._popupElement.querySelector(".modal__button");
    this._submitBtnText = this._submitButtonElement.textContent;
    this._inputFields = this._popupForm.querySelectorAll(".modal__input");
  }

  _getInputValues() {
    const inputData = {};
    this._inputFields.forEach((input) => {
      inputData[input.name] = input.value;
    });
    return inputData;
  }

  setInputValues(data) {
    this._inputFields.forEach((input) => {
      input.value = data[input.name];
    });
  }

  uploadingInfo(isloading, isLoadingText = "Saving..") {
    if (isloading) {
      this._submitButtonElement.classList.add("modal_button_saving");
      this._submitButtonElement.textContent = isLoadingText;
    } else {
      this._submitButtonElement.classList.remove("modal_button_saving");
      this._submitButtonElement.textContent = this._submitBtnText;
    }
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
