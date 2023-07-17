import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this.popupForm = this._popupElement.querySelector(".modal__container");
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    const inputFields = document.querySelectorAll(".modal__input");
    const inputData = {};
    inputFields.forEach(input, () => {
      inputData += { input };
    });
    return inputData;
  }

  setEventListeners() {
    this.popupForm.addEventListener("submit", (evt) =>
      this._handleFormSubmit(evt)
    );
    super.setEventListeners();
  }

  close() {
    this.popupForm.reset();
    super.close();
  }
}
