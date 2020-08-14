import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getActiveBrand, getOffersByBrand, getShowingOffersCount} from "../../reducer/catalog/selectors";
import {ActionCreator as CatalogCreator} from "../../reducer/catalog/reducer";
import Card from "../card/card.jsx";

const getOfferCard = (offers) => offers.map((offer) => {
  return (
    <Card
      key = {offer.id}
      offer = {offer}
    />
  );
});

const CardList = ({offers, activeBrand, showingOffersCount, onMoreView}) => {
  const showingOffers = offers.slice(0, showingOffersCount);

  return (
    <section className="board">
      <h1 className="board__title">Слуховые аппараты</h1>
      <ul className="breadscrums">
        <li className="breadscrums__item">
          <a className="breadscrums__link" href="index.html">Главная</a>
        </li>

        <li className="breadscrums__item">
          <a className="breadscrums__link" href="brands.html">Слуховые аппараты</a>
        </li>

        <li className="breadscrums__item">
          <a className="breadscrums__link">{activeBrand}</a>
        </li>
      </ul>
      <ul className="cards">
        {getOfferCard(showingOffers)}
      </ul>
      {showingOffersCount < offers.length ?
        <button onClick={() => onMoreView(activeBrand)} className="board__btn-more" type="button">Показать еще</button> : ``
      }
    </section>
  );
};

CardList.propTypes = {
  offers: PropTypes.array.isRequired,
  activeBrand: PropTypes.string.isRequired,
  showingOffersCount: PropTypes.number.isRequired,
  onMoreView: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offers: getOffersByBrand(state),
  activeBrand: getActiveBrand(state),
  showingOffersCount: getShowingOffersCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  onMoreView(activeBrand) {
    dispatch(CatalogCreator.moreView(activeBrand));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
