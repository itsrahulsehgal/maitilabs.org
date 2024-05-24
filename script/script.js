document.getElementById('toggleMenuBtn').addEventListener('click', function() {
    document.querySelector('.hidden-menu').style.top = document.querySelector('.hidden-menu').style.top === '0%' ? '-600%' : '0%';
});

document.getElementById('closeBtn').addEventListener('click', function() {
    document.querySelector('.hidden-menu').style.top = document.querySelector('.hidden-menu').style.top === '0%' ? '-600%' : '0%';
});


const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slides = document.querySelector('.slides');

let slideIndex = 0;

prevBtn.addEventListener('click', () => {
  slideIndex = (slideIndex === 0) ? slides.children.length - 1 : slideIndex - 1;
  showSlides();
});

nextBtn.addEventListener('click', () => {
  slideIndex = (slideIndex === slides.children.length - 1) ? 0 : slideIndex + 1;
  showSlides();
});

function showSlides() {
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}
 

// const slides = document.querySelector('.slides');

let startX;
let endX;
// let slideIndex = 0;

slides.addEventListener('touchstart', touchStart, false);
slides.addEventListener('touchmove', touchMove, false);

function touchStart(event) {
  startX = event.touches[0].clientX;
}

function touchMove(event) {
  endX = event.touches[0].clientX;
}

slides.addEventListener('touchend', function(event) {
  if (startX > endX) {
    slideIndex = (slideIndex === slides.children.length - 1) ? 0 : slideIndex + 1;
  } else {
    slideIndex = (slideIndex === 0) ? slides.children.length - 1 : slideIndex - 1;
  }
  showSlides();
}, false);

function showSlides() {
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}
