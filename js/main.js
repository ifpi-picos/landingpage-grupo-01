const btnEbook = document.getElementById("btnEbook");
const btnCloseModal = document.getElementById("btn-close-modal");
const btnCloseModal2 = document.getElementById("btn-close-modal-2");
const modal = document.getElementById("modalSheet");

btnEbook.addEventListener("click", () => {
    modal.classList.remove("ocultar-modal");
});

btnCloseModal.addEventListener("click", () => {
    modal.classList.add("ocultar-modal");
});

btnCloseModal2.addEventListener("click", () => {
    modal.classList.add("ocultar-modal");
});