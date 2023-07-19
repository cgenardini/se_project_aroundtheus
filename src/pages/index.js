import "./index.css";

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

import {
  initialCards,
  buttonEdit,
  buttonAdd,
  formAddElement,
  formEditElement,
  nameInput,
  jobInput,
  cardSelector,
  previewImagePopup,
  cardContainerSelector,
  formAddSelector,
  formEditSelector,
  profileNameSelector,
  profileJobSelector,
  addSubmitButton,
} from "../utils/constants.js";

// profile edit and add buttons

buttonEdit.addEventListener("click", () => {
  const userInfo = userInformation.getUserInfo();
  nameInput.value = userInfo.userName;
  jobInput.value = userInfo.userJob;
  editProfile.open();
});

buttonAdd.addEventListener("click", function (evt) {
  addFormValidator.disableButton();

  addCardPopup.open();
});

// form validator

const options = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const editFormValidator = new FormValidator(options, formEditElement);
const addFormValidator = new FormValidator(options, formAddElement);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

// Section

const cardSection = new Section(
  {
    renderer: (data) => {
      const cardElement = new Card(
        {
          data,
          handleImagePreview: (imageData) => {
            previewImage.open(imageData);
          },
        },
        cardSelector
      );
      cardSection.addItem(cardElement.getView());
    },
  },
  cardContainerSelector
);

// //popup with form - add card

const renderCard = (title, link) => {
  const cardElement = new Card(
    {
      data: { title, link },
      handleImagePreview: (imageData) => {
        previewImage.open(imageData);
      },
    },
    cardSelector
  );
  cardSection.addItem(cardElement.getView());
};

const addCardPopup = new PopupWithForm(formAddSelector, (data) => {
  const name = data.title;
  const link = data.link;

  renderCard(name, link);

  addCardPopup.close();
});

// // popup with form - edit profile

const editProfile = new PopupWithForm(formEditSelector, (data) => {
  const name = data.name;
  const job = data.job;
  userInformation.setUserInfo({
    nameInput: name,
    jobInput: job,
  });

  editProfile.close();
});

// userInfo

const userInformation = new UserInfo({
  nameSelector: profileNameSelector,
  jobTitleSelector: profileJobSelector,
});

// // popup with image - preview

const previewImage = new PopupWithImage(previewImagePopup);

// //initiate classes

cardSection.rendererItems(initialCards);
