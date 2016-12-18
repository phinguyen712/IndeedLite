//actions for calling reducers
export var updateProducts = (products) => {
  return {
    type: 'SET_PRODUCTS',
    products
  };
};
