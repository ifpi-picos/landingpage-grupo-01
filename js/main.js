const imagens = document.getElementById("imagens");
const modalCarrousel = document.getElementById("modal-carrousel");
const btnCloseModalCarrousel = document.getElementById("btn-close-modal-carrousel");

imagens.addEventListener("click", () => {
  modalCarrousel.classList.remove("ocultar-modal");
});

btnCloseModalCarrousel.addEventListener("click", () => {
  modalCarrousel.classList.add("ocultar-modal");
});

const carousel = document.getElementById('carouselIndicators');

carousel.addEventListener('slide.bs.carousel', function (event) {
  const activeCarousel = event.relatedTarget;
  const img = activeCarousel.querySelector('img');
  const src = img.getAttribute('src');
  const modalImg = document.getElementById('modal-img');
  modalImg.setAttribute('src', src);
});