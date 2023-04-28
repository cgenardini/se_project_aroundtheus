const options = {
  formSelector: ".modal__container",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const showInputError = (formElement, inputElement, options) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.add(options.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
};

const hideInputError = (formElement, inputElement, options) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(options.inputErrorClass);
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement, options) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, options);
    return;
  }
  hideInputError(formElement, inputElement, options);
};

const disableButton = (buttonElement, options) => {
  buttonElement.classList.add(options.inactiveButtonClass);
  buttonElement.disabled = true;
};

const enableButton = (buttonElement, options) => {
  buttonElement.classList.remove(options.inactiveButtonClass);
  buttonElement.disabled = false;
};

const toggleButton = (inputElements, buttonElement, options) => {
  let invalidInput = false;

  inputElements.forEach((inputElement) => {
    if (!inputElement.validity.valid) {
      return (invalidInput = true);
    }
  });

  if (invalidInput) {
    disableButton(buttonElement, options);
    return;
  }
  enableButton(buttonElement, options);
};

const setEventListeners = (formElement, options) => {
  const inputElements = [
    ...formElement.querySelectorAll(options.inputSelector),
  ];
  const buttonElement = formElement.querySelector(options.submitButtonSelector);

  inputElements.forEach((inputElement) => {
    inputElement.addEventListener("input", (evt) => {
      checkInputValidity(formElement, inputElement, options);
      toggleButton(inputElements, buttonElement, options);
    });
  });
};

const enableValidation = (options) => {
  const formElements = [...document.querySelectorAll(options.formSelector)];

  formElements.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault;
    });
    setEventListeners(formElement, options);
  });
};

enableValidation(options);
