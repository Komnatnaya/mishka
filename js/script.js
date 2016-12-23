'use strict';

//Маркет на карте на главной странице.

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: {lat: 59.936705, lng: 30.321744}
  });

  var image = 'img/icon-map-pin.svg';
  var beachMarker = new google.maps.Marker({
    position: {lat: 59.936259, lng: 30.321744},
    map: map,
    icon: image
  });
}

//Открытие меню в мобильно версии.

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

//Открытие модального окна.

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
