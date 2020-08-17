'use strict';

// меню
(function () {
  var menu = document.querySelector('.navigation');
  var menuBtn = document.querySelector('.header__nav-btn');
  var btnSvg = document.querySelector('.ham1');

  menuBtn.addEventListener('click', function () {
    menu.classList.toggle('navigation--show');
    menuBtn.classList.toggle('header__nav-btn--active');
    btnSvg.classList.toggle('active');
  });
})();

// фильтр
if (document.querySelector('.filters')) {
  var filters = document.querySelector('.filters');
  var filterOpen = document.querySelector('.catalog__filter-btn');
  var filterClose = filters.querySelector('.filters__btn-close');

  filterOpen.addEventListener('click', function () {
    filters.classList.add('filters--open');
  });

  filterClose.addEventListener('click', function () {
    filters.classList.remove('filters--open');
  });
};

// описание
if (document.querySelector('.card-description')) {
  var description = document.querySelector('.card-description');
  var openBtn = description.querySelector('.card-description__open');
  var descriptionList = description.querySelector('.card-description__list');

  openBtn.addEventListener('click', function () {
    descriptionList.classList.toggle('card-description__list--show');
    openBtn.classList.toggle('card-description__open--active');
    description.classList.toggle('card-description--show');
  })
}

// форма заказа
if (document.querySelector('#order')) {
  var modal = document.querySelector('.overlay');
  var open = document.querySelector('.js-open');
  var close = modal.querySelector('.modal-order__close');
  var body = document.querySelector('body');

  open.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.add('overlay--show');
    body.classList.add('scroll-stop');
  })

  close.addEventListener('click', function () {
    modal.classList.remove('overlay--show');
    body.classList.remove('scroll-stop');
  })

  modal.addEventListener('click', function(evt) {
    if (evt.target === modal) {
      modal.classList.remove('overlay--show');
      body.classList.remove('scroll-stop');
    }
  })

  document.addEventListener('keydown', function (evt) {

    if (evt.keyCode === 27) {
      modal.classList.remove('overlay--show');
      body.classList.remove('scroll-stop');
    }
  });
}
