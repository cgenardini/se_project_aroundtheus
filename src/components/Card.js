export default class Card {
  constructor(
    { data, handleImagePreview, handleDeleteIcon, handleLike },
    cardSelector
  ) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._isLiked = data.isLiked;
    this._handleImagePreview = handleImagePreview;
    this._handleDeleteIcon = handleDeleteIcon;
    this._cardSelector = cardSelector;
    this._handleLike = handleLike;
  }

  _handleLikeButton() {
    this._handleLike(this._element, this._isLiked);
    this.isLiked();
  }

  isLiked() {
    this._isLiked = !this._isLiked;
  }

  initialLikeStatus() {
    if (this._isLiked === true) {
      this._elementLikeButton.classList.add("card_button-like_active");
    } else {
      this._elementLikeButton.classList.remove("card_button-like_active");
    }
  }

  toggleLikeElement() {
    this._elementLikeButton.classList.toggle("card_button-like_active");
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
    this._element.isLiked = this._isLiked;

    this._elementTitle.textContent = this._name;
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._element.id = this._id;
    this.initialLikeStatus();

    this._setEventListeners();

    return this._element;
  }
}
