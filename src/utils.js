import offers from "./data/offers";

export const getPrice = (str) => {
  return String(str).replace(/(\d)(?=(\d{3})+(\D|$))/g, `$1 `);
};

export const extend = (a, b) => Object.assign({}, a, b);

export const getChecked = () => {
  const filterBox = document.querySelector(`.filters__list`);
  const checked = [
    {
      type: `type`,
      value: ``
    },
    {
      type: `power`,
      value: ``
    },
    {
      type: `sound`,
      value: ``
    },
  ];

  checked.map((it) => {
    if (filterBox.querySelector(`[data-type=${it.type}] input[type="radio"]:checked`)) {
      it.value = filterBox.querySelector(`[data-type=${it.type}] input[type="radio"]:checked`).value;
    }
  });

  return checked;
};

export const filteredOffers = (brand, checked) => {
  const offersCopy = offers.slice();
  return offersCopy.filter((offer) => {
    if (!checked[0].value) {
      return true;
    }
    return offer.type === checked[0].value && offer.vendor === brand;
  }).filter((offer) => {
    if (!checked[1].value) {
      return true;
    }
    return offer.powerLevel === checked[1].value && offer.vendor === brand;
  }).filter((offer) => {
    if (!checked[2].value) {
      return true;
    }
    return offer.signalProcessingType === checked[2].value && offer.vendor === brand;
  });
};
