
import * as redux from 'redux';
import {searchResultsReducer,
        likedMoviesReducer,
        searchHistoryReducer,
        searchCategoryReducer} from 'reducers';

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    searchResults: searchResultsReducer,
    likedMovies: likedMoviesReducer,
    searchHistory: searchHistoryReducer,
    searchCategory: searchCategoryReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
  // for developer tools
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
