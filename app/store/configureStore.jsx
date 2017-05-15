
import * as redux from 'redux';
import {searchParamsReducer,
        searchResultsReducer,
        likedJobsReducer} from 'reducers';

export const configure = (initialState = {}) => {
  const reducer = redux.combineReducers({
    searchParams: searchParamsReducer,
    searchResults: searchResultsReducer,
    likedJobsReducer: likedJobsReducer
  });

  const store = redux.createStore(reducer, initialState, redux.compose(
  // for developer tools
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
