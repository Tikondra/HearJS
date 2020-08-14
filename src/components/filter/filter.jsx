import React from "react";
import {ActionCreator as CatalogCreator} from "../../reducer/catalog/reducer";
import {connect} from "react-redux";
import {getChecked} from "../../utils";

const Filter = ({onFilterOffers}) => {
  return (
    <section className="filters">
      <form className="filters__form" action="" method="" onSubmit={(evt) => {
        evt.preventDefault();
        const checked = getChecked();

        onFilterOffers(checked);
      }}>
        <h2 className="filters__main-title">Фильтр</h2>

        <nav className="categories">
          <h3 className="categories__title">Бренды</h3>
          <ul className="categories__list">
            <li className="categories__item">
              <a className="categories__link" href="catalog.html?Widex">Widex</a>
            </li>
            <li className="categories__item">
              <a className="categories__link" href="catalog.html?Bernafon">Bernafon</a>
            </li>
            <li className="categories__item">
              <a className="categories__link" href="catalog.html?ReSound">ReSound</a>
            </li>
            <li className="categories__item">
              <a className="categories__link" href="catalog.html?Istok-Audio">Исток-Аудио</a>
            </li>
            <li className="categories__item">
              <a className="categories__link" href="catalog.html?Aurica">Aurica</a>
            </li>
          </ul>
        </nav>

        <ul className="filters__list">
          <li className="filters__item" data-type={`type`}>
            <h3 className="filters__title">Тип корпуса</h3>
            <ul className="filters__checkboxes checkboxes">
              <li className="checkboxes__item">
                <input className="checkboxes__input visually-hidden" type="radio" name="type"
                  value="Внутриканальный" id="type1" />
                <label className="checkboxes__label" htmlFor="type1">
                  <div className="checkboxes__check"/>
                  Внутриканальный
                </label>
              </li>
              <li className="checkboxes__item">
                <input className="checkboxes__input visually-hidden" type="radio" name="type" value="Заушные"
                  id="type3" />
                <label className="checkboxes__label" htmlFor="type3">
                  <div className="checkboxes__check"/>
                  Заушные
                </label>
              </li>
              <li className="checkboxes__item">
                <input className="checkboxes__input visually-hidden" type="radio" name="type"
                  value="Карманные" id="type4" />
                <label className="checkboxes__label" htmlFor="type4">
                  <div className="checkboxes__check"/>
                  Карманные
                </label>
              </li>
              <li className="checkboxes__item">
                <input className="checkboxes__input visually-hidden" type="radio" name="type"
                  value="Микрозаушный" id="type5"/>
                <label className="checkboxes__label" htmlFor="type5">
                  <div className="checkboxes__check"/>
                  Микрозаушный
                </label>
              </li>
            </ul>
          </li>
          <li className="filters__item" data-type={`power`}>
            <h3 className="filters__title">Мощность</h3>
            <ul className="filters__checkboxes checkboxes">
              <li className="checkboxes__item">
                <input className="checkboxes__input visually-hidden" type="radio" name="power"
                  value="Сверхмощный" id="very-strong" />
                <label className="checkboxes__label" htmlFor="very-strong">
                  <div className="checkboxes__check"/>
                  Сверхмощный
                </label>
              </li>

              <li className="checkboxes__item">
                <input className="checkboxes__input visually-hidden" type="radio" name="power" value="Мощный"
                  id="strong" />
                <label className="checkboxes__label" htmlFor="strong">
                  <div className="checkboxes__check"/>
                  Мощный
                </label>
              </li>

              <li className="checkboxes__item">
                <input className="checkboxes__input visually-hidden" type="radio" name="power"
                  value="Средней мощности" id="middle" />
                <label className="checkboxes__label" htmlFor="middle">
                  <div className="checkboxes__check"/>
                  Средней мощности
                </label>
              </li>
            </ul>
          </li>
          <li className="filters__item" data-type={`sound`}>
            <h3 className="filters__title">Обработка звука</h3>
            <ul className="filters__checkboxes checkboxes">
              <li className="checkboxes__item">
                <input className="checkboxes__input visually-hidden" type="radio" name="sound"
                  value="Аналоговые" id="analog" />
                <label className="checkboxes__label" htmlFor="analog">
                  <div className="checkboxes__check"/>
                  Аналоговые
                </label>
              </li>
              <li className="checkboxes__item">
                <input className="checkboxes__input visually-hidden" type="radio" name="sound" value="Цифровой"
                  id="digital" />
                <label className="checkboxes__label" htmlFor="digital">
                  <div className="checkboxes__check"/>
                  Цифровые
                </label>
              </li>
            </ul>
          </li>
        </ul>
        <div className="filters__btn-box">
          <button className="blue-btn filters__btn" type="submit">Показать</button>
          <button className="blue-btn filters__btn filter__btn--reset" type="reset">Очистить</button>
        </div>
        <button className="filters__btn-close" type="button">Х</button>
      </form>
    </section>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  onFilterOffers(checked) {
    dispatch(CatalogCreator.filteredOffers(checked));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
