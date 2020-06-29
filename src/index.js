import React from "react";
import ReactDOM from "react-dom";
import offers from "./data/offers";
import PageCard from "./components/page-card/page-card.jsx";
import Catalog from "./components/catalog/catalog.jsx";

const strGET = window.location.search.replace(`?`, ``);

const init = () => {
  if (document.querySelector(`#card-page`)) {
    const offer = offers.find((it) => it.id === Number(strGET));

    ReactDOM.render(
        <PageCard
          offer = {offer}
        />,
        document.querySelector(`#card-page`)
    );
  }

  if (document.querySelector(`#catalog-page`)) {
    const someOffers = offers.filter((it) => it.vendor === strGET);
    console.log(someOffers)
    ReactDOM.render(
        <Catalog
          offers={someOffers}
          page = {strGET}
        />,
        document.querySelector(`#catalog-page`)
    );
  }
};

init();

