export const searchResultsReducer = (state = false, action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH_RESULTS':
      return action.searchResults;
    default:
      return state;
  }
};


export const likedMoviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_LIKE_MOVIE':
      return [...state,action.movie];
    case 'REMOVE_LIKE_MOVIE':
      state = state.slice();
      state.splice(action.index,1);
      return state;
    default:
      return state;
  }
};


export const searchHistoryReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SEARCH_HISTORY':
      return [...state, action.query];
    default:
      return state;
  }
};


export const searchCategoryReducer = (state = 'movie', action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_CATEGORY':
      return action.category;
    default:
      return state;
  }
};
