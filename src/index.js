import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {store} from "./store";
import {ActionCreator as CatalogAction} from "./reducer/catalog/reducer";
import offers from "./data/offers";
import PageCard from "./components/page-card/page-card.jsx";
import Catalog from "./components/catalog/catalog.jsx";

const strGET = window.location.search.replace(`?`, ``);

const init = () => {
  if (document.querySelector(`#card-page`)) {
    const offer = offers.find((it) => it.id === Number(strGET));
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

