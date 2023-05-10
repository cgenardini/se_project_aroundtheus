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

export { closeModal, openModal, closeByEscape, closeByOutsideClick };
