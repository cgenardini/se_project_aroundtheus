import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popupElement.querySelector(".modal__image");
    this._imageTitle = this._popupElement.querySelector(".modal__image-title");
  }

  open({ name, link }) {
    this._imageTitle.textContent = name;
    this._image.src = link;
    this._image.alt = name;
    super.open();
  }
}
