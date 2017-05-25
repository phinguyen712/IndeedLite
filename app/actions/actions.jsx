//  actions for calling reducers

export const updateSearchParams = (searchParams) => {
  return {
    type: 'UPDATE_SEARCH_PARAMS',
    searchParams
  };
};

export const updateSearchResults = (searchResults) => {
  return {
    type: 'UPDATE_SEARCH_RESULTS',
    searchResults
  };
};

export const changePageNumber = (pageNumber) => {
  return {
    type: 'CHANGE_PAGE_NUMBER',
    pageNumber
  };
};
