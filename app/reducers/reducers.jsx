
export const searchParamsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH_PARAMS':{
      let newState = Object.assign({},state);

      newState[action.searchParams.key] = action.searchParams.value;
      return newState;
    }
    default:
      return state;
  }
};

export const searchResultsReducer = (state = false, action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH_RESULTS':
      return action.searchResults;
    default:
      return state;
  }
};

export const currentPageReducer = (state = 1, action) => {
  switch (action.type) {
    case 'CHANGE_PAGE_NUMBER':
      return action.pageNumber;
    default:
      return state;
  }
};

export const likedJobsReducer = (state = [], action) => {
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
