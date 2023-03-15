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

let button = document.querySelector(".profile__button");
let buttonEdit = document.querySelector(".profile__button_type_edit");
let modal = document.querySelector(".modal");
let modalButtonClose = document.querySelector(".modal__button_type_close");

buttonEdit.addEventListener("click", function (evt) {
  modal.classList.add("modal__open");
  console.log("hello");
});

modalButtonClose.addEventListener("click", function (evt) {
  modal.classList.remove("modal__open");
});
