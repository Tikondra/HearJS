import React from "react";
import PropTypes from "prop-types";
import {getPrice} from "../../utils";

const Card = (props) => {
  const {offer} = props;
  const {id, title, price} = offer;
  const href = `card.html?${id}`;

  return (
    <li className="hits__item">
      <img src="img/hit1.jpg" width="150" height="150" alt={title} />
      <h3 className="hits__item-title">Слуховой аппарат: <br/><span>{title}</span></h3>
      <p className="hits__price">{getPrice(price)} ₽</p>
      <a className="hits__btn blue-btn" href={href}>Подробнее</a>
    </li>
  );
};

Card.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })
};

export default Card;
