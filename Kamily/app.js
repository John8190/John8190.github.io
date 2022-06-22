'use strict';

/* NAV BAR */

const faBars = document.querySelector('#menu-bar');
const navLinks = document.querySelector('.nav-query');

function toggleMenuBar () {
	faBars.classList.toggle('fa-times');
	navLinks.classList.toggle('nav-toggle');
}

faBars.addEventListener('click', toggleMenuBar);

const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;

    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    console.log(slides);

    const activeSlide = slides.querySelector("[data-active]");

    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    if (newIndex < 0) {
      newIndex = slides.children.length - 1;
    } else if (newIndex === 0) {
      newIndex = newIndex;
    } else if (newIndex >= 2) {
      newIndex = 0;
    }

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});


/* CARD */

// let cardText = document.querySelectorAll('.text');
// let cardImg = document.querySelectorAll('.services-img');

// for (let i = 0; i < cardImg.length; i++) {
// 	cardImg[i].addEventListener('mouseover', function () {
// 	cardText[i].classList.toggle('text-hover');
// 	cardImg[i].classList.toggle('img-1-hover');
// 	});
// 	cardImg[i].addEventListener('mouseout', function () {
// 		cardText[i].classList.toggle('text-hover');
// 		cardImg[i].classList.toggle('img-1-hover');
// 	});
// }