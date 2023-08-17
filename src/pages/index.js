import "./index.css";

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import PopupDelete from "../components/PopupDelete.js";

import {
  initialCards,
  buttonEdit,
  buttonAdd,
  formAddElement,
  formEditElement,
  formAvatarElement,
  nameInput,
  jobInput,
  cardSelector,
  previewImagePopup,
  cardContainerSelector,
  formAddSelector,
  formEditSelector,
  formAvatarSelector,
  profileNameSelector,
  profileJobSelector,
  addSubmitButton,
  profileAvatarSelector,
  deletePopupSelector,
  deleteButtonSelector,
  profileImageElement,
  avatarContainerElement,
} from "../utils/constants.js";
import { _ } from "core-js";

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

avatarContainerElement.addEventListener("click", () => {
  editAvatarPopUp.open();
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
const avatorFormValidator = new FormValidator(options, formAvatarElement);

editFormValidator.enableValidation();
addFormValidator.enableValidation();
avatorFormValidator.enableValidation();

// Section

const cardSection = new Section(
  {
    renderer: (data) => {
      renderCard(data);
    },
  },
  cardContainerSelector
);

// render card function

const renderCard = (data) => {
  const cardElement = new Card(
    {
      data,
      handleImagePreview: (imageData) => {
        previewImage.open(imageData);
      },
      handleDeleteIcon: (cardElement) => {
        const deleteCardPopup = new PopupDelete(
          deletePopupSelector,
          deleteButtonSelector,

          () => {
            api
              .deleteCard(cardElement)
              .then(() => {
                if (cardElement) {
                  cardElement.remove();
                }
              })
              .catch((err) => {
                console.error(err);
              });
          }
        );
        deleteCardPopup.open();
      },
      handleLike: (card, isLiked) => {
        cardElement.toggleLikeElement();
        if (isLiked === true) {
          api
            .dislikeCard(card)
            .then(() => {})
            .catch((err) => {
              console.error(err);
            });
        } else {
          api
            .likeCard(card)
            .then(() => {})
            .catch((err) => {
              console.error(err);
            });
        }
      },
    },
    cardSelector
  );

  cardSection.addItem(cardElement.getView());
};

// popup with form - edit avatar

const editAvatarPopUp = new PopupWithForm(formAvatarSelector, (info) => {
  editAvatarPopUp.uploadingInfo(true);
  api
    .editUserAvatar(info)
    .then((info) => {
      setAvatar(info);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      editAvatarPopUp.uploadingInfo(false);
      editAvatarPopUp.close();
    });
});

// //popup with form - add card

const addCardPopup = new PopupWithForm(formAddSelector, newCard);

function newCard(cardData) {
  addCardPopup.uploadingInfo(true);
  api
    .addNewCard(cardData)
    .then((addedCardData) => {
      console.log(addedCardData);

      renderCard(addedCardData);
    })

    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      addCardPopup.uploadingInfo(false);
      addCardPopup.close();
    });
}

// // popup with form - edit profile info

const editProfile = new PopupWithForm(formEditSelector, (info) => {
  editProfile.uploadingInfo(true);
  api
    .editUserInfo(info)
    .then((info) => {
      setProfileInfo(info);

      return info;
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      editProfile.uploadingInfo(false);
      editProfile.close();
    });
});

// userInfo

const userInformation = new UserInfo({
  nameSelector: profileNameSelector,
  jobTitleSelector: profileJobSelector,
  avatarSelector: profileAvatarSelector,
});

// // popup with image - preview

const previewImage = new PopupWithImage(previewImagePopup);

// API class

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "45ab58aa-ed14-4dd2-85dc-1e748f07f7cd",
    "Content-Type": "application/json",
  },
});

// initial cards

function renderInitialCards(callback) {
  api
    .getInitialCards()
    .then((cards) => {
      return callback(cards);
    })
    .catch((err) => {
      console.error(err);
    });
}

renderInitialCards((cards) => {
  cardSection.rendererItems(cards);
});

// get user info

function getUserInfo(callback) {
  api
    .getUserInfo()
    .then((info) => {
      return callback(info);
    })
    .catch((err) => {
      console.error(err);
    });
}

getUserInfo((info) => {
  setProfileInfo(info);

  setAvatar(info);
});

function setProfileInfo(info) {
  userInformation.setUserInfo({
    nameInput: info.name,
    jobInput: info.about,
  });
}

function setAvatar(info) {
  userInformation.setUserAvatar({
    avatarInput: info.avatar,
  });
}
