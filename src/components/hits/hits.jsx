import React from "react";
import PropTypes from "prop-types";
import Card from "../card/card.jsx";

const getCards = (offers) => offers.map((it) => {
  if (it.isRecommended) {
    return <Card
      key = {it.id}
      offer={it}
    />;
  }

  return null;
});

const Hits = ({offers}) => {
  return (
    <div className="hits__wrapper">
      <div className="hits__description">
        <h2 className="hits__title">Хиты <span>продаж</span></h2>
        <p className="hits__text">
          Мы подобрали самые продоваемые модели слуховых аппаратов для Вас
        </p>
        <a className="hits__btn blue-btn hits__btn--description" href="catalog.html">Перейти в каталог</a>
      </div>
      <ul className="hits__list">
        {getCards(offers)}
      </ul>
    </div>
  );
};

Hits.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default Hits;
