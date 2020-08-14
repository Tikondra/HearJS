import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {store} from "./store";
import {ActionCreator as CatalogAction} from "./reducer/catalog/reducer";
import PageCard from "./components/page-card/page-card.jsx";
import Catalog from "./components/catalog/catalog.jsx";
import {initLocal} from "./map";

const strGET = window.location.search.replace(`?`, ``);

const init = () => {
  if (document.querySelector(`#card-page`)) {
    store.dispatch(CatalogAction.changeActiveOfferId(Number(strGET)));

    ReactDOM.render(
        <Provider store={store}>
          <PageCard/>
        </Provider>,
        document.querySelector(`#card-page`)
    );
  }

  if (document.querySelector(`#catalog-page`)) {
    store.dispatch(CatalogAction.changeBrand(strGET));

    ReactDOM.render(
        <Provider store={store}>
          <Catalog/>
        </Provider>,
        document.querySelector(`#catalog-page`)
    );
  }
};

init();
initLocal();

(function () {
  let menu = document.querySelector(`.navigation`);
  let menuBtn = document.querySelector(`.header__nav-btn`);
  let btnSvg = document.querySelector(`.ham1`);

  menuBtn.addEventListener(`click`, function () {
    menu.classList.toggle(`navigation--show`);
    menuBtn.classList.toggle(`header__nav-btn--active`);
    btnSvg.classList.toggle(`active`);
  });
})();

// фильтр
if (document.querySelector(`.filters`)) {
  let filters = document.querySelector(`.filters`);
  let filterOpen = document.querySelector(`.catalog__filter-btn`);
  let filterClose = filters.querySelector(`.filters__btn-close`);

  filterOpen.addEventListener(`click`, function () {
    filters.classList.add(`filters--open`);
  });

  filterClose.addEventListener(`click`, function () {
    filters.classList.remove(`filters--open`);
  });
}

// описание
if (document.querySelector(`.card-description`)) {
  let description = document.querySelector(`.card-description`);
  let openBtn = description.querySelector(`.card-description__open`);
  let descriptionList = description.querySelector(`.card-description__list`);

  openBtn.addEventListener(`click`, function () {
    descriptionList.classList.toggle(`card-description__list--show`);
    openBtn.classList.toggle(`card-description__open--active`);
    description.classList.toggle(`card-description--show`);
  });
}

// форма заказа
if (document.querySelector(`#order`)) {
  let modal = document.querySelector(`.overlay`);
  let open = document.querySelector(`.js-open`);
  let close = modal.querySelector(`.modal-order__close`);
  let body = document.querySelector(`body`);

  open.addEventListener(`click`, function (evt) {
    evt.preventDefault();
    modal.classList.add(`overlay--show`);
    body.classList.add(`scroll-stop`);
  });

  close.addEventListener(`click`, function () {
    modal.classList.remove(`overlay--show`);
    body.classList.remove(`scroll-stop`);
  });

  modal.addEventListener(`click`, function (evt) {
    if (evt.target === modal) {
      modal.classList.remove(`overlay--show`);
      body.classList.remove(`scroll-stop`);
    }
  });

  document.addEventListener(`keydown`, function (evt) {

    if (evt.keyCode === 27) {
      modal.classList.remove(`overlay--show`);
      body.classList.remove(`scroll-stop`);
    }
  });
}
