import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getAccessoryOffers} from "../../reducer/catalog/selectors";
import Accs from "../accs/accs.jsx";

const getOfferCard = (offers) => offers.map((offer) => {
  return (
    <Accs
      key = {offer.id}
      offer = {offer}
    />
  );
});

const AccsList = ({offers}) => {
  return (
    <section className="board">
      <h1 className="board__title">Аксессуары</h1>
      <ul className="breadscrums">
        <li className="breadscrums__item">
          <a className="breadscrums__link" href="index.html">Главная</a>
        </li>

        <li className="breadscrums__item">
          <a className="breadscrums__link">Аксессуары</a>
        </li>
      </ul>
      <ul className="cards">
        {getOfferCard(offers)}
      </ul>
    </section>
  );
};

AccsList.propTypes = {
  offers: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  offers: getAccessoryOffers(state),
});

export default connect(mapStateToProps)(AccsList);
