
import * as redux from 'redux';
import {orderReducer} from 'reducers';

export const configure = (initialState = {}) => {
  const reducer = redux.combineReducers({
    order: orderReducer
  });

  const store = redux.createStore(reducer, initialState, redux.compose(
  // for developer tools
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
