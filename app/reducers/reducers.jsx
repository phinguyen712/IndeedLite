
//Reducers update state
export var productsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return action.products;
    default:
      return state;
  };
};

export var orderReducer = (state = "descending", action) => {
  switch (action.type) {
    case 'CHANGE_ORDER':
      return action.order;
    default:
      return state;
  };
};
