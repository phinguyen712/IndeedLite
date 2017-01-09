//actions for calling reducers
export var updateProducts = (update) => {
  return {
    type: 'SET_PRODUCTS',
    products:update.products,
    order:update.order,
    sortBy:update.sortBy
  };
};

export var changeOrder = (order) => {
  return {
    type: 'CHANGE_ORDER',
    order
  };
};

export var sortBy = (string) => {
  return {
    type: 'SORT_BY',
    string
  };
};

export var toggleDiscount = () => {
  return {
    type: 'TOGGLE_DISCOUNT'
  };
};

export var updateCartItems = (cart) => {
  return {
    type: 'UPDATE_CART',
    cart
  };
};
