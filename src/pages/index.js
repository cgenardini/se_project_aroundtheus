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
  profileAvatarSelector,
  deletePopupSelector,
  deleteButtonSelector,
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
      renderCard(data);
    },
  },
  cardContainerSelector
);

// testing render card function

const renCard = (data) => {
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
            // console.log(cardElement.id);

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
    },
    cardSelector
  );

  cardSection.addItem(cardElement.getView());
};
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
            // console.log(cardElement.id);

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
      handleLike: (cardElement) => {
        function likeButton() {
          if (cardElement.isLiked === true) {
            api.likeCard(cardElement.id);
          }
        }
      },
    },
    cardSelector
  );

  cardSection.addItem(cardElement.getView());
};

// //popup with form - add card

const addCardPopup = new PopupWithForm(formAddSelector, (data) => {
  const name = data.name;
  const link = data.link;
  const id = data._id;
  const isLiked = data.isLiked;
  const cardData = {
    name,
    link,
    id,
    isLiked,
  };

  newCard(cardData);
});

function newCard(cardData) {
  api
    .addNewCard(cardData)
    .then((addedCardData) => {
      console.log(addedCardData);

      renCard(addedCardData);

      addCardPopup.close();
    })

    .catch((err) => {
      console.error(err);
    });
}

// function addCardSuccess(cardData) {
//   renderCard(cardData);
// }

// // popup with form - edit profile info

const editProfile = new PopupWithForm(formEditSelector, (info) => {
  api
    .editUserInfo(info)
    .then((info) => {
      return info;
    })
    .catch((err) => {
      console.error(err);
    });
  // userInformation.setUserInfo({
  //   nameInput: name,
  //   jobInput: job,
  // });

  editProfile.close();
});

// userInfo

const userInformation = new UserInfo({
  nameSelector: profileNameSelector,
  jobTitleSelector: profileJobSelector,
  avatarSelector: profileAvatarSelector,
});

// // popup with image - preview

const previewImage = new PopupWithImage(previewImagePopup);

// //initiate classes

// cardSection.rendererItems(initialCards);

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
      console.log(cards);

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
  userInformation.setUserInfo({
    nameInput: info.name,
    jobInput: info.about,
  });
  console.log(info);
  userInformation.setUserAvatar({
    avatarInput: info.avatar,
  });
});

// card is liked
