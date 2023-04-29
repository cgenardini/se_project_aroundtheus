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
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

const buttonEdit = document.querySelector(".profile__button_type_edit");
const buttonAdd = document.querySelector(".profile__button_type_add");

const modals = document.querySelectorAll(".modal");
const modalEdit = document.querySelector("#modal-edit");
const modalAdd = document.querySelector("#modal-add");

const closeButtons = document.querySelectorAll(".modal__close");

const profileFormElement = document.querySelector(".modal__container");
const profileAddFormElement = document.querySelector("#container-add");

const nameInput = profileFormElement.querySelector(".modal__input_type_name");
const jobInput = profileFormElement.querySelector(".modal__input_type_job");

const titleInput = profileAddFormElement.querySelector("#title");
const linkInput = profileAddFormElement.querySelector("#link");

const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job-title");

const imageModal = document.querySelector("#modal-image");
const modalImage = document.querySelector(".modal__image");
const modalImageTitle = document.querySelector(".modal__image-title");

// Functions

function renderCard(data, container) {
  container.prepend(data);
}

function createCard(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardElementTitle = cardElement.querySelector(".card__description");
  const cardElementImage = cardElement.querySelector(".card__image");
  cardElementTitle.textContent = data.name;
  cardElementImage.src = data.link;
  cardElementImage.alt = data.name;

  const buttonDelete = cardElement.querySelector(".card__button-delete");
  buttonDelete.addEventListener("click", function () {
    cardElement.remove();
  });
  const buttonLike = cardElement.querySelector(".card__button-like");
  buttonLike.addEventListener("click", function () {
    buttonLike.classList.toggle("card_button-like_active");
  });

  cardElementImage.addEventListener("click", function () {
    openModal(imageModal);
    modalImage.src = data.link;
    modalImage.alt = data.name;
    modalImageTitle.textContent = data.name;
  });

  return cardElement;
}

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
  const card = createCard({
    name: title,
    link: link,
  });

  renderCard(card, cardsContainer);
  closeModal(modalAdd);
  evt.target.reset();
  modalAdd.disabled = true;
}

const closeByOutsideClick = (evt) => {
  if (evt.target.classList.contains("modal_open")) {
    const openedPopup = document.querySelector(".modal_open");
    closeModal(openedPopup);
  }
};

const closeByEscape = (evt) => {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".modal_open");
    closeModal(openedPopup);
  }
};

function openModal(popup) {
  popup.classList.add("modal_open");

  document.addEventListener("mousedown", closeByOutsideClick);
  document.addEventListener("keydown", closeByEscape);
}

function closeModal(popup) {
  popup.classList.remove("modal_open");
  document.removeEventListener("mousedown", closeByOutsideClick);
  document.removeEventListener("keydown", closeByEscape);
}

// modal open/close

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

// form submit

profileFormElement.addEventListener("submit", handleProfileFormSubmit);

profileAddFormElement.addEventListener("submit", handleImageAddSubmit);

// forEach

initialCards.forEach((data) => {
  const card = createCard(data);
  renderCard(card, cardsContainer);
});

closeButtons.forEach((button) => {
  const popup = button.closest(".modal");
  button.addEventListener("click", () => closeModal(popup));
});

// modals.forEach((modal) => {
//   modal.addEventListener("mousedown", (evt) => {
//     if (evt.target.classList.contains("modal_open")) {
//       closeModal(modal);
//     }
//     if (evt.target.classList.contains("modal__close")) {
//       closeModal(modal);
//     }
//   });
// });
