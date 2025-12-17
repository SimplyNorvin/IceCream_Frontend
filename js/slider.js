const slides = document.querySelectorAll('.response__item');
const btns = document.querySelectorAll('.response__pagination-btn');
const track = document.querySelector('.response__list');

const changeSlide = (slideNum) => {
  track.style.transform = `translateX(-${slideNum * 100}%)`;

  btns.forEach((btn) => btn.classList.remove('is-active'));
  btns[slideNum].classList.add('is-active');
};
