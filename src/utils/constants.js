export const imageModal = document.querySelector("#modal-image");
export const modalImage = document.querySelector(".modal__image");
export const modalImageTitle = document.querySelector(".modal__image-title");

export const initialCards = [
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

export const cardsContainer = document.querySelector(".gallery__cards");
export const cardContainerSelector = ".gallery__cards";

export const buttonEdit = document.querySelector(".profile__button_type_edit");
export const buttonAdd = document.querySelector(".profile__button_type_add");
export const addSubmitButton = document.querySelector("#add_submit-button");

export const modalEdit = document.querySelector("#modal-edit");
export const modalAdd = document.querySelector("#modal-add");

export const closeButtons = document.querySelectorAll(".modal__close");

export const profileFormElement = document.querySelector(".modal__container");
export const formAddElement = document.querySelector("#container-add");
export const formAddSelector = "#modal-add";
export const formEditSelector = "#modal-edit";
export const formEditElement = document.querySelector("#container-edit");

export const nameInput = profileFormElement.querySelector(
  ".modal__input_type_name"
);
export const jobInput = profileFormElement.querySelector(
  ".modal__input_type_job"
);

export const profileName = document.querySelector(".profile__name");
export const profileJob = document.querySelector(".profile__job-title");
export const profileNameSelector = ".profile__name";
export const profileJobSelector = ".profile__job-title";

export const cardSelector = "#card-template";

export const previewImagePopup = "#modal-image";
