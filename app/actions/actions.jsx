//  actions for calling reducers

export const changeOrder = (order) => {
  return {
    type: 'CHANGE_ORDER',
    order
  };
};
