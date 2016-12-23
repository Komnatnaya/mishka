'use strict';

var navMain = document.querySelector('.main-nav');
var navButton = document.querySelector('.page-header__toggle-nav');
var navTorggle = document.querySelector('.page-header__toggle');

navMain.classList.remove('main-nav--nojs');
navTorggle.classList.remove('page-header__toggle--nojs');

navButton.addEventListener('click', function(event) {
  event.preventDefault();
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navTorggle.classList.remove('page-header__toggle--close-nav');
    navTorggle.classList.add('page-header__toggle--open-nav');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navTorggle.classList.remove('page-header__toggle--open-nav');
    navTorggle.classList.add('page-header__toggle--close-nav');
  }
});
