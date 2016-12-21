'use strict';

var link = document.querySelectorAll('.modal-btn');

if(link.length > 0) {
  var modal = document.querySelector('.modal');
  var overlay = document.querySelector('.overlay');

  for(var i = 0; i < link.length; i++) {
    link[i].addEventListener('click', function(event) {
      event.preventDefault();
      modal.classList.add('modal--show');
      overlay.classList.add('overlay--show');
    })
  }

  overlay.addEventListener('click', function(event) {
    event.preventDefault();
    modal.classList.remove('modal--show');
    overlay.classList.remove('overlay--show');
  })
}
