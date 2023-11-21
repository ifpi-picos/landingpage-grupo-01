const imagens = document.getElementById("imagens");
const modalCarrousel = document.getElementById("modal-carrousel");
const btnCloseModalCarrousel = document.getElementById("btn-close-modal-carrousel");

imagens.addEventListener("click", () => {
  modalCarrousel.classList.remove("ocultar-modal");
});

btnCloseModalCarrousel.addEventListener("click", () => {
  modalCarrousel.classList.add("ocultar-modal");
});