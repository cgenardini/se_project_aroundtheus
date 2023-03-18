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

const button = document.querySelector(".profile__button");
const buttonEdit = document.querySelector(".profile__button_type_edit");
const modal = document.querySelector(".modal");
const modalButtonClose = document.querySelector(".modal__button_type_close");

const profileFormElement = document.querySelector(".modal__container");

const nameInput = profileFormElement.querySelector(".model__input_type_name");
const jobInput = profileFormElement.querySelector(".model__input_type_job");

const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job-title");

// modal open/close

buttonEdit.addEventListener("click", function (evt) {
  evt.preventDefault();
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  modal.classList.add("modal__open");
});

modalButtonClose.addEventListener("click", function (evt) {
  modal.classList.remove("modal__open");
});

// form submit

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  modal.classList.remove("modal__open");
}

profileFormElement.addEventListener("submit", handleProfileFormSubmit);

// render cards

const cardsContainer = document.querySelector(".gallery__cards");
const data = initialCards;

function createCard(data) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardElementTitle = cardTemplate.querySelector(".card__description");
  const cardElementImage = cardTemplate.querySelector(".card__image");
  cardElementTitle.textContent = data.name;
  cardElementImage.src = data.link;
  cardElementImage.alt = data.name;
  return cardElement;
}

for (let i = 0; i < data.length; i++) {
  createCard(data[i]);
  const card = createCard(data);

  cardsContainer.prepend(card);
}
