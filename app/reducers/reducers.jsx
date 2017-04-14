const store = require('configureStore');

export var orderReducer = (state = "descending", action) => {
  switch (action.type) {
    case 'CHANGE_ORDER':
      return action.order;
    default:
      return state;
  };
};
