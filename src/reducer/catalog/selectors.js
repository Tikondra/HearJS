import NameSpace from "../name-space";

export const getOffers = (state) => state[NameSpace.CATALOG].offers;

export const getOffersByBrand = (state) => state[NameSpace.CATALOG].offers.filter((offer) => offer.vendor === state[NameSpace.CATALOG].activeBrand);

export const getOfferById = (state) => state[NameSpace.CATALOG].offers.find((offer) => offer.id === state[NameSpace.CATALOG].activeOfferId);

export const getActiveBrand = (state) => state[NameSpace.CATALOG].activeBrand;

export const getShowingOffersCount = (state) => state[NameSpace.CATALOG].showingOffers;
