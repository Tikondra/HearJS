import React from "react";
import CardList from "../card-list/card-list.jsx";
import Filter from "../filter/filter.jsx";

const Catalog = () => {
  return (
    <section className="catalog">
      <button className="catalog__filter-btn" type="button">Фильтр</button>
      <Filter/>
      <CardList/>
    </section>
  );
};

export default Catalog;
