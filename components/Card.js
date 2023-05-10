const imageModal = document.querySelector("#modal-image");
const modalImage = document.querySelector(".modal__image");
const modalImageTitle = document.querySelector(".modal__image-title");

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

// Card

export default class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;

    this._cardSelector = cardSelector;
  }

  _handleLikeButton() {
    this._elementLikeButton.classList.toggle("card_button-like_active");
  }

  _handleDeleteButton() {
    this._element.remove();
  }

  _handleImagePrview() {
    openModal(imageModal);
    modalImage.src = this._link;
    modalImage.alt = this._name;
    modalImageTitle.textContent = this._name;
  }

  _setEventListeners() {
    this._elementDeleteButton.addEventListener("click", () =>
      this._handleDeleteButton()
    );
    this._elementImage.addEventListener("click", () =>
      this._handleImagePrview()
    );
    this._elementLikeButton.addEventListener("click", () =>
      this._handleLikeButton()
    );
  }

  getView() {
    this._element = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    this._elementTitle = this._element.querySelector(".card__description");
    this._elementImage = this._element.querySelector(".card__image");
    this._elementDeleteButton = this._element.querySelector(
      ".card__button-delete"
    );
    this._elementLikeButton = this._element.querySelector(".card__button-like");

    this._elementTitle.textContent = this._name;
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;

    this._setEventListeners();

    return this._element;
  }
}
