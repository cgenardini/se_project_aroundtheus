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
const cardTemplate = document.querySelector("#card-template").content;

const button = document.querySelector(".profile__button");
const buttonEdit = document.querySelector(".profile__button_type_edit");
const buttonAdd = document.querySelector(".profile__button_type_add");

const modal = document.querySelector(".modal");
const modalEdit = document.querySelector("#modal-edit");
const modalAdd = document.querySelector("#modal-add");
const editButtonClose = document.querySelector("#close-edit");
const addButtonClose = document.querySelector("#close-add");

const profileFormElement = document.querySelector(".modal__container");
const profileAddFormElement = document.querySelector("#container-add");

const nameInput = profileFormElement.querySelector(".modal__input_type_name");
const jobInput = profileFormElement.querySelector(".modal__input_type_job");

const titleInput = profileAddFormElement.querySelector("#title");
const linkInput = profileAddFormElement.querySelector("#link");

const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job-title");

// Functions

function renderCard(data, container) {
  container.prepend(data);
}

function createCard(data) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
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

  const imageModal = document.querySelector("#modal-image");
  cardElementImage.addEventListener("click", function () {
    imageModal.classList.add("modal_open");
    const modalImage = document.querySelector(".modal__image");
    modalImage.src = data.link;
    modalImage.alt = data.name;
    const modalImageTitle = document.querySelector(".modal__image-title");
    modalImageTitle.textContent = data.name;
  });

  const imageButtonClose = document.querySelector("#image-close");
  imageButtonClose.addEventListener("click", function () {
    imageModal.classList.remove("modal_open");
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
}

function openModal(evt) {
  evt.classList.add("modal_open");
}

function closeModal(evt) {
  evt.classList.remove("modal_open");
}

function deleteCard() {
  const card = document.querySelector(".card");
  card.closest.remove();
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
  titleInput.value = "";
  linkInput.value = "";
  openModal(modalAdd);
});

editButtonClose.addEventListener("click", () => {
  closeModal(modalEdit);
});

addButtonClose.addEventListener("click", () => {
  closeModal(modalAdd);
});

// form submit

profileFormElement.addEventListener("submit", handleProfileFormSubmit);

profileAddFormElement.addEventListener("submit", handleImageAddSubmit);

// render cards

initialCards.forEach((data) => {
  createCard(data);
  const card = createCard(data);
  renderCard(card, cardsContainer);
  // cardsContainer.append(card);
});

// delete cards

// buttonDelete.addEventListener("click", function () {
//   console.log("Hi");
// });
