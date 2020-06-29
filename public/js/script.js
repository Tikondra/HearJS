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

// local
(function () {
  var citySelect = document.querySelector('.header__city select');
  var headerAddress = document.querySelector('.header__address');
  var footerAddress = document.querySelector('.footer__address span');
  var contactsCitySelect = document.querySelector('.contacts__city select');

  function changeForm (val) {
    var form = document.querySelector('.map__info');
    var address = form.querySelector('.map__address');
    var phone1 = form.querySelector('.map__phone--1 span');
    var phone2 = form.querySelector('.map__phone--2 span');
    var phoneLink1 = form.querySelector('.map__phone--1');
    var phoneLink2 = form.querySelector('.map__phone--2');

    if (val === 'Astrachan') {
      address.textContent = 'ул. Боевая, 14';
      phone1.textContent = '+7(988) 172-87-76';
      phone2.textContent = '+7(8512) 42-87-76';
      phoneLink1.href = 'tel:89881728776';
      phoneLink2.href = 'tel:88512428776';
    }
    if (val === 'Stavrapol') {
      address.textContent = 'ул. Мира, 276';
      phone1.textContent = '+7(962) 455–82–99';
      phone2.textContent = '+7(8652) 65–82–99';
      phoneLink1.href = 'tel:89624558299';
      phoneLink2.href = 'tel:88652658299';
    }
    if (val === 'Tymen') {
      address.textContent = 'ул. Республики, 61';
      phone1.textContent = '+7(952) 678–93–94';
      phone2.textContent = '+7(3452) 96–93–94';
      phoneLink1.href = 'tel:89526789394';
      phoneLink2.href = 'tel:83452969394';
    }
  }

  function changeInfo (val) {
    if (val === 'Astrachan') {
      headerAddress.textContent = 'ул. Боевая, 14';
      footerAddress.textContent = 'ул. Боевая, 14';
    }
    if (val === 'Stavrapol') {
      headerAddress.textContent = 'ул. Мира, 276';
      footerAddress.textContent = 'ул. Мира, 276';
    }
    if (val === 'Tymen') {
      headerAddress.textContent = 'ул. Республики, 61';
      footerAddress.textContent = 'ул. Республики, 61';
    }
  }

  citySelect.addEventListener('change', function(evt) {
    changeInfo(evt.target.value);

    if (contactsCitySelect) {
      contactsCitySelect.value = evt.target.value;
      changeForm(evt.target.value);
    }
  })

  if (contactsCitySelect) {
    contactsCitySelect.addEventListener('change', function(evt) {
      citySelect.value = evt.target.value;
      changeInfo(evt.target.value);
      changeForm(evt.target.value);
    })
  }
})();
