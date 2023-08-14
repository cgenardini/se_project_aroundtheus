import Popup from "./Popup.js";

export default class PopupDelete extends Popup {
  constructor(popupSelector, deleteButtonSelector, handleDeleteButton) {
    super(popupSelector);
    this._popupButton = this._popupElement.querySelector(deleteButtonSelector);
    this._handleDeleteButton = handleDeleteButton;
  }

  //   open(cardElement) {
  //     super.open();
  //     this.setEventListeners(cardElement);
  //   }

  //   handleDeleteButton (cardElement){

  //   }

  open() {
    super.open();
  }

  setEventListeners() {
    this._popupButton.addEventListener("click", this._handleDeleteSubmit);
    super.setEventListeners();
  }

  _handleDeleteSubmit = () => {
    this._handleDeleteButton();
    this.close();
  };
}
