import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {PageType} from "../../const";
import Hits from "../hits/hits.jsx";
import PageCard from "../page-card/page-card.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOffer: null,
      activePage: PageType.MAIN,
    };

    this.offers = this.props;
  }

  _renderScreen() {
    const {activePage, activeOffer} = this.state;

    switch (activePage) {
      case PageType.MAIN:
        return (
          <Hits offers={this.offers}/>
        );
      case PageType.OFFER:
        return (
          <PageCard offer={activeOffer}/>
        );
      default:
        return null;
    }
  }

  render() {
    return this._renderScreen();
  }
}

App.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default App;
