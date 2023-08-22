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
  buttonEdit,
  buttonAdd,
  formAddElement,
  formEditElement,
  formAvatarElement,
  cardSelector,
  previewImagePopup,
  cardContainerSelector,
  formAddSelector,
  formEditSelector,
  formAvatarSelector,
  profileNameSelector,
  profileJobSelector,
  profileAvatarSelector,
  deletePopupSelector,
  deleteButtonSelector,
  avatarContainerElement,
  valOptions,
} from "../utils/constants.js";
import { _ } from "core-js";

let currentCardElement;

// profile edit and add buttons

buttonEdit.addEventListener("click", () => {
  const userInfo = userInformation.getUserInfo();

  editProfilePopup.setInputValues(userInfo);

  editProfilePopup.open();
});

buttonAdd.addEventListener("click", function (evt) {
  addFormValidator.disableButton();

  addCardPopup.open();
});

avatarContainerElement.addEventListener("click", () => {
  avatorFormValidator.disableButton();
  editAvatarPopUp.open();
});

// form validator

const editFormValidator = new FormValidator(valOptions, formEditElement);
const addFormValidator = new FormValidator(valOptions, formAddElement);
const avatorFormValidator = new FormValidator(valOptions, formAvatarElement);

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
        currentCardElement = cardElement;

        deleteCardPopup.open();
      },
      handleLike: (card, isLiked) => {
        if (isLiked === true) {
          api
            .dislikeCard(card)
            .then(() => {
              cardElement.toggleLikeElement();
            })
            .catch(console.error);
        } else {
          api
            .likeCard(card)
            .then(() => {
              cardElement.toggleLikeElement();
            })
            .catch(console.error);
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
      editAvatarPopUp.close();
    })
    .catch(console.error)
    .finally(() => {
      editAvatarPopUp.uploadingInfo(false);
    });
});

// //popup with form - add card

const addCardPopup = new PopupWithForm(formAddSelector, addNewCard);

function addNewCard(cardData) {
  addCardPopup.uploadingInfo(true);
  api
    .addNewCard(cardData)
    .then((addedCardData) => {
      renderCard(addedCardData);
      addCardPopup.close();
    })

    .catch(console.error)
    .finally(() => {
      addCardPopup.uploadingInfo(false);
    });
}

// // popup with form - edit profile info

const editProfilePopup = new PopupWithForm(formEditSelector, (info) => {
  editProfilePopup.uploadingInfo(true);
  api
    .editUserInfo(info)
    .then((info) => {
      setProfileInfo(info);
      editProfilePopup.close();
      return info;
    })
    .catch(console.error)
    .finally(() => {
      editProfilePopup.uploadingInfo(false);
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

function renderInitialCards() {
  return api.getInitialCards();
}

// get user info

function getUserInfo() {
  return api.getUserInfo();
}

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

// promise all getUserInfo and render cards

Promise.all([getUserInfo(), renderInitialCards()])
  .then(([userData, cards]) => {
    setProfileInfo(userData);
    setAvatar(userData);
    cardSection.rendererItems(cards);
  })
  .catch(console.error);

// delete card popup

const deleteCardPopup = new PopupDelete(
  deletePopupSelector,
  deleteButtonSelector,

  () => {
    deleteCard(currentCardElement);
  }
);

function deleteCard(cardElement) {
  api
    .deleteCard(cardElement)
    .then(() => {
      if (cardElement) {
        cardElement.remove();
        deleteCardPopup.close();
      }
    })
    .catch(console.error);
}
