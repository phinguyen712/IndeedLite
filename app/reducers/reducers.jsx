export const searchResultsReducer = (state = false, action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH_RESULTS':
      return action.searchResults;
    default:
      return state;
  }
};

export const likedMoviesReducer = (state = false, action) => {
  switch (action.type) {
    case 'ADD_LIKE_MOVIE':
      if(state){
        return [...state,action.movie];
      }
      return [action.movie];
    default:
      return state;
  }
};
