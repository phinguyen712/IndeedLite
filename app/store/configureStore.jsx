import * as redux from 'redux';


import {} from 'reducers'

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({

  });


  var store = redux.createStore(reducer, initialState, redux.compose(
  //for developer tools
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
