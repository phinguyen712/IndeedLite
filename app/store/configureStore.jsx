
import * as redux from 'redux';
import {productsReducer,
        orderReducer,
        disCountReducer,
        cartReducer,
        sortByReducer} from 'reducers';

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    products: productsReducer,
    order: orderReducer,
    sortBy: sortByReducer,
    showDisCount: disCountReducer,
    cart: cartReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
  // for developer tools
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
