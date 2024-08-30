/**
 Show Data Toggle funtion
 */

//  let icon = document.querySelector(".icon1");
// let ul = document.querySelector("navbar a");
// icon.addEventListener("click", () => {
//     navbar .classList.toggle("showData");
//     if (navbar .classList.contains("showData")) {
//         document.getElementById("bar").className = "fa-solid fa-xmark";
//     } else {
//         document.getElementById("bar").className = "fa-solid fa-bars";
//     }
// });



// Select the .hero element and other required elements
const hero = document.querySelector('.hero');
const boxes = document.querySelectorAll('.box');

// Create an IntersectionObserver instance
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      // console.log(entry.target)

    } else {
      entry.target.classList.remove('show');
      // console.log(entry.isIntersecting)
    }
  });

}, {

});
// const body = document.body;    /1/
// body.style.background = 'linear-gradient(to right,  #dd869f,#4c1d33)';


// Observe each .box element
boxes.forEach(box => {
  observer.observe(box);
});

// Shrink navbar on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 150) { // Trigger the shrink effect after scrolling 150px
    navbar.classList.add('shrink');
  } else {
    navbar.classList.remove('shrink');
  }
});

// Slider functionality
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlide = 0;

rightBtn.addEventListener('click', () => {
  activeSlide++;
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
  setBgToHero(); // Update to use setBgToHero
  setActiveSlide();
});

leftBtn.addEventListener('click', () => {
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  setBgToHero(); // Update to use setBgToHero
  setActiveSlide();
});

// Initialize the background image and active slide
setBgToHero();

function setBgToHero() {
  hero.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove('active'));
  slides[activeSlide].classList.add('active');
}
