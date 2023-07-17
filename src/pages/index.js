import "./index.css";

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

import { openModal } from "../utils/utils.js";

import {
  initialCards,
  buttonEdit,
  buttonAdd,
  modalEdit,
  modalAdd,
  formAddElement,
  formEditElement,
  nameInput,
  jobInput,
  profileName,
  profileJob,
  cardSelector,
  previewImagePopup,
  cardContainerSelector,
  formAddSelector,
  formEditSelector,
  profileNameSelector,
  profileJobSelector,
} from "../utils/constants.js";

// profile edit and add buttons

buttonEdit.addEventListener("click", function (evt) {
  evt.preventDefault();
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openModal(modalEdit);
});

buttonAdd.addEventListener("click", function (evt) {
  evt.preventDefault(evt);
  openModal(modalAdd);
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

const addCardPopup = new PopupWithForm(formAddSelector, (evt) => {
  evt.preventDefault();
  const title = evt.target.title.value;
  const link = evt.target.link.value;
  const card = {
    name: title,
    link: link,
  };

  cardSection.rendererItems([card]);
  addCardPopup.close();
  addFormValidator.resetValidation();
});

// // popup with form - edit profile

const editProfile = new PopupWithForm(formEditSelector, (evt) => {
  evt.preventDefault();
  UserInformation.setUserInfo({ nameInput, jobInput });
  // profileName.textContent = nameInput.value;
  // profileJob.textContent = jobInput.value;

  editProfile.close();
});

// userInfo

const UserInformation = new UserInfo({
  nameSelector: profileNameSelector,
  jobTitleSelector: profileJobSelector,
});

// // popup with image - preview

const previewImage = new PopupWithImage(previewImagePopup);

// //initiate classes

cardSection.rendererItems(initialCards);

previewImage.setEventListeners();

editProfile.setEventListeners();
addCardPopup.setEventListeners();
