
import * as redux from 'redux';
import {productsReducer,orderReducer,disCountReducer} from 'reducers';


export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
            products:productsReducer,
            order:orderReducer,
            showDisCount:disCountReducer

  });


  var store = redux.createStore(reducer, initialState, redux.compose(
  //for developer tools
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
