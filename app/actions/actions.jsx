//actions for calling reducers
export var updateProducts = (products) => {
  return {
    type: 'SET_PRODUCTS',
    products
  };
};

export var changeOrder = (order) => {
  return {
    type: 'CHANGE_ORDER',
    order
  };
};
