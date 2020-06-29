export const getPrice = (str) => {
  return String(str).replace(/(\d)(?=(\d{3})+(\D|$))/g, `$1 `);
};
