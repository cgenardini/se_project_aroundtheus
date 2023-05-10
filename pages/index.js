import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import { closeModal, openModal } from "../utils/utils.js";

// variables

const initialCards = [
  {
    name: "Rome",
    link: "https://images.unsplash.com/photo-1581274050302-581149d3b4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2487&q=80",
  },
  {
    name: "Bali",
    link: "https://images.unsplash.com/photo-1559628233-eb1b1a45564b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    name: "Croatia",
    link: "https://images.unsplash.com/photo-1454452176678-c0437432bba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    name: "Cambodia",
    link: "https://images.unsplash.com/photo-1609949165382-2e442783c8d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
  },
  {
    name: "Oaxaca",
    link: "https://images.unsplash.com/photo-1465256410760-10640339c72c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    name: "Greece",
    link: "https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
];

const cardsContainer = document.querySelector(".gallery__cards");

const buttonEdit = document.querySelector(".profile__button_type_edit");
const buttonAdd = document.querySelector(".profile__button_type_add");

const modalEdit = document.querySelector("#modal-edit");
const modalAdd = document.querySelector("#modal-add");

const closeButtons = document.querySelectorAll(".modal__close");

const profileFormElement = document.querySelector(".modal__container");
const formAddElement = document.querySelector("#container-add");
const formEditElement = document.querySelector("#container-edit");

const nameInput = profileFormElement.querySelector(".modal__input_type_name");
const jobInput = profileFormElement.querySelector(".modal__input_type_job");

const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job-title");

const cardSelector = "#card-template";

//

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closeModal(modalEdit);
}

function handleImageAddSubmit(evt) {
  evt.preventDefault();
  const title = evt.target.title.value;
  const link = evt.target.link.value;
  const card = {
    name: title,
    link: link,
  };

  renderCard(card, cardsContainer);
  closeModal(modalAdd);
  evt.target.reset();
  editFormValidator.toggleButton();
  addFormValidator.toggleButton();
}

closeButtons.forEach((button) => {
  const popup = button.closest(".modal");
  button.addEventListener("click", () => closeModal(popup));
});

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

profileFormElement.addEventListener("submit", handleProfileFormSubmit);

formAddElement.addEventListener("submit", handleImageAddSubmit);

// card

function renderCard(data, container) {
  const newCard = new Card(data, cardSelector);
  container.prepend(newCard.getView());
}

initialCards.forEach((data) => {
  renderCard(data, cardsContainer);
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
