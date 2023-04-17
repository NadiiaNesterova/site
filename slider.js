const slides = document.querySelectorAll('.slider-slide');
const slider = document.querySelector('.slider-wrapper');
const prevBtn = document.querySelector('.slider-prev');
const nextBtn = document.querySelector('.slider-next');
const slideWidth = slides[0].clientWidth;
let currentIndex = 0;

function goToSlide(index) {
  slider.style.transform = `translateX(-${slideWidth * index}px)`;
  currentIndex = index;
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
    slider.style.transition = 'none';
    slider.style.transform = `translateX(0)`;
  }
  setTimeout(() => {
    slider.style.transition = `transform 1s ease`;
    goToSlide(currentIndex);
  }, 0);
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
    slider.style.transition = 'none';
    slider.style.transform = `translateX(-${slideWidth * (currentIndex + 1)}px)`;
  }
  setTimeout(() => {
    slider.style.transition = `transform 1s ease`;
    goToSlide(currentIndex);
  }, 0);
}

let intervalId = setInterval(() => {
  nextSlide();
}, 5000);

prevBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  prevSlide();
  intervalId = setInterval(() => {
    nextSlide();
  }, 5000);
});

nextBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  nextSlide();
  intervalId = setInterval(() => {
    nextSlide();
  }, 5000);
});
