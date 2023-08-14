export default class Card {
  constructor(
    { data, handleImagePreview, handleDeleteIcon, handleLike, handleDislike },
    cardSelector
  ) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._isLiked = data.isLiked;
    this._handleImagePreview = handleImagePreview;
    this._handleDeleteIcon = handleDeleteIcon;
    this._cardSelector = cardSelector;
  }

  _handleLikeButton() {
    this._elementLikeButton.classList.toggle("card_button-like_active");
  }

  isLiked() {
    if (this._elementLikeButton.classList.contains("card_button-like_active")) {
      return true;
    }
  }

  isDisliked() {
    if (
      !this._elementLikeButton.classList.contains("card_button-like_active")
    ) {
      return false;
    }
  }

  handleDeleteButton() {
    this._element.remove();
  }

  _setEventListeners() {
    this._elementDeleteButton.addEventListener("click", () =>
      this._handleDeleteIcon(this._element)
    );
    this._elementImage.addEventListener("click", () =>
      this._handleImagePreview({ name: this._name, link: this._link })
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
    this._elementLikeButton.isLiked = this.isLiked();

    this._elementTitle.textContent = this._name;
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._element.id = this._id;

    this._setEventListeners();

    return this._element;
  }
}
