import React from "react";
import PropTypes from "prop-types";
import {getPrice} from "../../utils";

const Accs = ({offer}) => {
  const {id, title, price, picture} = offer;

  return (
    <li className="hits__item">
      <img src={picture} width="150" height="150" alt={title} />
      <h3 className="hits__item-title"><span>{title}</span></h3>
      <p className="hits__price">{price !== 0 ? `${getPrice(price)} ₽` : ``}</p>
      <a className="hits__btn blue-btn" href={`accs.html?${id}`}>Подробнее</a>
    </li>
  );
};

Accs.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    picture: PropTypes.string.isRequired,
  })
};

export default Accs;
