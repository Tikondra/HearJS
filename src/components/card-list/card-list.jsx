import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {nanoid} from "nanoid";
import {getPrice} from "../../utils";
import {MORE_SHOW_CARD, START_SHOW_CARD} from "../../const";

const getCard = (offers) => offers.map((it) => {
  const src = `card.html?${it.id}`;
  return (
    <li key={nanoid()} className="hits__item cards__item">
      <img src={it.picture} width="150" height="150" alt={it.title} />
      <h3 className="hits__item-title">Слуховой аппарат: <br/><span>{it.title}</span></h3>
      <p className="hits__price">{getPrice(it.price)} ₽</p>
      <a className="hits__btn blue-btn" href={src}>Подробнее</a>
    </li>
  );
});

class CardList extends PureComponent {
  constructor(props) {
    super(props);

    this.page = props.page;
    this.offers = props.offers;
    this.offersCopy = this.offers;

    this.state = {
      showingCard: START_SHOW_CARD,
    };

    this._moreBtnClickHandler = this._moreBtnClickHandler.bind(this);
  }

  _moreBtnClickHandler() {
    this.setState((prevState) => ({
      showingCard: prevState.showingCard + MORE_SHOW_CARD
    }));
  }

  render() {
    const {showingCard} = this.state;
    const someOffers = this.offersCopy.slice(0, showingCard);

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
            <a className="breadscrums__link">{this.page}</a>
          </li>
        </ul>
        <ul className="cards">
          {getCard(someOffers)}
        </ul>
        <button onClick={this._moreBtnClickHandler} className="board__btn-more" type="button">Показать еще</button>
      </section>
    );
  }
}

CardList.propTypes = {
  offers: PropTypes.array.isRequired,
  page: PropTypes.string.isRequired,
};

export default CardList;
