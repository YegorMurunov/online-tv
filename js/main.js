"use strict";

AOS.init(); // HEADER

var body = document.body,
    burgerMenu = document.querySelector('.header__menu'),
    header = document.querySelector('header.header');
window.addEventListener('scroll', function () {
  if (pageYOffset > header.offsetHeight) {
    if (!header.classList.contains('_fixed')) {
      header.classList.add('_fixed');
    }
  }

  if (pageYOffset === 0) {
    if (header.classList.contains('_fixed')) {
      header.classList.remove('_fixed');
    }
  }
});
burgerMenu.addEventListener('click', function () {
  header.classList.toggle('active');
  body.classList.toggle('lock');
  burgerMenu.classList.toggle('active');
});