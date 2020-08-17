import React from "react";
import PropTypes from "prop-types";
import {getPrice} from "../../utils";
import {getAccessoryById} from "../../reducer/catalog/selectors";
import {connect} from "react-redux";

const PageAccessory = ({offer}) => {
  const {title, price, picture, shortDescription} = offer;

  return (
    <section className="card">
      <ul className="breadscrums">
        <li className="breadscrums__item">
          <a className="breadscrums__link" href="index.html">Главная</a>
        </li>

        <li className="breadscrums__item">
          <a className="breadscrums__link" href="accessory.html">Аксессуары</a>
        </li>

        <li className="breadscrums__item">
          <a className="breadscrums__link">{title}</a>
        </li>
      </ul>
      <div className="card__content">
        <div className="card__img">
          <img src={picture} width="" height="150" alt={title} style={{maxHeight: `300px`}}/>
        </div>
        <div className="card__info">
          <h1 className="card__title"><span>{title}</span></h1>
          <p className="card__price">{getPrice(price)} ₽</p>
          <p className="card__description">
            {shortDescription}
          </p>
          <a className="blue-btn card__btn js-open" href="">Заказать</a>
        </div>
      </div>
      <div className="overlay">
        <section className="modal-order" id="order">
          <form className="modal-order__form">
            <h2 className="modal-order__title">
              Заполните форму и мы свяжемся с&nbsp;вами <span>в&nbsp;ближайшее время</span>
            </h2>
            <p className="modal-order__text">Ваш заказ: <span>{title}</span></p>
            <input className="modal-order__input" type="text" name="name" placeholder="Ваше ФИО" />
            <input className="modal-order__input" type="tel" name="phone" placeholder="Ваш номер телефона" />
            <button className="modal-order__btn blue-btn" type="submit">Отправить заявку</button>
            <button className="modal-order__close" type="button"/>
          </form>
        </section>
      </div>
    </section>
  );
};

PageAccessory.propTypes = {
  offer: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    picture: PropTypes.string.isRequired,
    shortDescription: PropTypes.string,
  })
};

const mapStateToProps = (state) => ({
  offer: getAccessoryById(state),
});

export default connect(mapStateToProps)(PageAccessory);
