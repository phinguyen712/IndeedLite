//  actions for calling reducers

export const searchResults = (searchResults) => {
  return {
    type: 'UPDATE_SEARCH_RESULTS',
    searchResults
  };
};

export const addLikeMovie = (movie) => {
  return {
    type: 'ADD_LIKE_MOVIE',
    movie
  };
};
