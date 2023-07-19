class FormValidator {
  constructor(options, formElement) {
    this._inputSelector = options.inputSelector;
    this._submitButtonSelector = options.submitButtonSelector;
    this._inactiveButtonClass = options.inactiveButtonClass;
    this._errorClass = options.errorClass;

    this._formElement = formElement;
  }

  _showInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = "";
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
      return;
    }
    this._hideInputError(inputElement);
  }

  _enableButton() {
    this._buttonElement.classList.remove(this._inactiveButtonClass);
    this._buttonElement.disabled = false;
  }

  disableButton() {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.disabled = true;
  }

  _toggleButton() {
    let invalidInput = false;

    this._inputElements.forEach((inputElement) => {
      if (!inputElement.validity.valid) {
        return (invalidInput = true);
      }
    });

    if (invalidInput) {
      this.disableButton();
      return;
    }
    this._enableButton();
  }

  resetValidation() {
    this._toggleButton();

    this._inputElements.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }

  _setEventListeners() {
    this._inputElements = [
      ...this._formElement.querySelectorAll(this._inputSelector),
    ];
    this._buttonElement = this._formElement.querySelector(
      this._submitButtonSelector
    );

    this._inputElements.forEach((inputElement) => {
      inputElement.addEventListener("input", (evt) => {
        this._checkInputValidity(inputElement);
        this._toggleButton();
      });
    });
  }

  enableValidation() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault;
    });
    this._setEventListeners();
  }
}

export default FormValidator;
