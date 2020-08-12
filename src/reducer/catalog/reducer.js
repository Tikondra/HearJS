import offers from "../../data/offers";
import {extend, filteredOffers} from "../../utils";

const initialState = {
  offers,
  activeBrand: null,
  activeOfferId: null,
  showingOffers: 9,
};

const ActionType = {
  CHANGE_BRAND: `CHANGE_BRAND`,
  CHANGE_ACTIVE_OFFER_ID: `CHANGE_ACTIVE_OFFER_ID`,
  MORE_VIEW: `MORE_VIEW`,
  FILTERED_OFFERS: `FILTERED_OFFERS`
};

const ActionCreator = {
  changeBrand: (brand) => {
    return {
      type: ActionType.CHANGE_BRAND,
      payload: brand,
    };
  },

  moreView: () => {
    return {
      type: ActionType.MORE_VIEW,
      payload: 3
    };
  },

  changeActiveOfferId: (id) => {
    return {
      type: ActionType.CHANGE_ACTIVE_OFFER_ID,
      payload: id,
    };
  },

  filteredOffers: (checked) => {
    return {
      type: ActionType.FILTERED_OFFERS,
      payload: checked,
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_BRAND:
      return extend(state, {
        activeBrand: action.payload,
      });

    case ActionType.MORE_VIEW:
      return extend(state, {
        showingOffers: state.showingOffers + action.payload,
      });

    case ActionType.CHANGE_ACTIVE_OFFER_ID:
      return extend(state, {
        activeOfferId: action.payload,
      });

    case ActionType.FILTERED_OFFERS:
      return extend(state, {
        offers: filteredOffers(state.activeBrand, action.payload),
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
