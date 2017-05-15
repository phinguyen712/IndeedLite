//  actions for calling reducers

export const updateSearchParams = (searchParams) => {
  return {
    type: 'UPDATE_SEARCH_PARAMS',
    searchParams
  };
};

export const searchResults = (searchResults) => {
  return {
    type: 'UPDATE_SEARCH_RESULTS',
    searchResults
  };
};
