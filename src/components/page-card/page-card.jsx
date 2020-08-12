import React, {Fragment} from "react";
import {nanoid} from "nanoid";
import PropTypes from "prop-types";
import {getPrice} from "../../utils";
import {getOfferById} from "../../reducer/catalog/selectors";
import {connect} from "react-redux";

const getDescription = (descriptions) => descriptions.map((it) => {
  return (
    <li key={nanoid()} className="card-description__item">
      <h3 className="card-description__item-title">{it.title}:</h3>
      <p className="card-description__item-text">
        {it.value}
      </p>
    </li>
  );
});

const getSpecification = (specifications) => specifications.map((it) => {
  return (
    <li key={nanoid()}>{it}</li>
  );
});

const PageCard = ({offer}) => {
  const {
    title, price, picture, shortDescription,
    vendor, type, powerLevel, optional,
    signalProcessingType, descriptions, specifications
  } = offer;

  const isDescriptions = descriptions ?
    <Fragment>
      <h2 className="card-description__title">
        Подробное описание:
        <svg className="card-description__open card-description__open--active" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40"
          height="40" fill="none">
          <use xlinkHref="#icon-blue-arrow"/>
        </svg>
      </h2>
      <ul className="card-description__list">
        {getDescription(descriptions)}
      </ul>
    </Fragment> : ``;

  const isOptional = optional ?
    <Fragment>
      <h3>Беспроводная связь Bluetooth и аксессуары (опции):</h3>
      <ul>{getSpecification(optional)}</ul>
    </Fragment> : ``;

  const isSpecification = specifications ?
    <Fragment>
      <h3>Основые характеристики:</h3>
      <ul>
        {getSpecification(specifications)}
      </ul>
    </Fragment> : ``;

  return (
    <section className="card">
      <ul className="breadscrums">
        <li className="breadscrums__item">
          <a className="breadscrums__link" href="index.html">Главная</a>
        </li>

        <li className="breadscrums__item">
          <a className="breadscrums__link" href="brands.html">Слуховые аппараты</a>
        </li>

        <li className="breadscrums__item">
          <a className="breadscrums__link" href={`catalog.html?${vendor}`}>{vendor}</a>
        </li>

        <li className="breadscrums__item">
          <a className="breadscrums__link">{title}</a>
        </li>
      </ul>
      <div className="card__content">
        <div className="card__img">
          <img src={picture} width="" height="" alt="RESOUND MATCH 80" />
        </div>
        <div className="card__info">
          <h1 className="card__title">Слуховой аппарат: <br/><span>{title}</span></h1>
          <p className="card__price">{getPrice(price)} ₽</p>
          <p className="card__description">
            {shortDescription}
          </p>
          <p className="card__parameter"><span>Производитель:</span> {vendor}</p>
          <p className="card__parameter"><span>Тип корпуса:</span> {type}</p>
          <p className="card__parameter"><span>Уровень мощности:</span> {powerLevel}</p>
          <p className="card__parameter"><span>Тип обработки сигнала:</span> {signalProcessingType}</p>
          <a className="blue-btn card__btn js-open" href="">Заказать</a>
        </div>
      </div>
      <div className="card-description">
        {isDescriptions}
        {isSpecification}
        {isOptional}
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

PageCard.propTypes = {
  offer: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    picture: PropTypes.string.isRequired,
    shortDescription: PropTypes.string,
    vendor: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    powerLevel: PropTypes.string.isRequired,
    signalProcessingType: PropTypes.string,
    descriptions: PropTypes.array,
    specifications: PropTypes.array,
    optional: PropTypes.array,
  })
};

const mapStateToProps = (state) => ({
  offer: getOfferById(state),
});

export default connect(mapStateToProps)(PageCard);
