'use strict';

var link = document.querySelector('.modal-btn');
var modal = document.querySelector('.modal');
var overlay = document.querySelector('.overlay');

link.addEventListener('click', function(event) {
  event.preventDefault();
  modal.classList.add('modal--show');
  overlay.classList.add('overlay--show');
});

overlay.addEventListener('click', function(event) {
  event.preventDefault();
  modal.classList.remove('modal--show');
  overlay.classList.remove('overlay--show');
});
