var reducers = require('reducers');
var expect = require('expect');
//prevents objects from being mutable
var df = require('deep-freeze-strict');

describe('Reducers', () => {

  describe('SET_PRODUCTS', () => {
    it('Load Products Reducer with API Data', () => {
      var action = {
        type: 'SET_PRODUCTS',
        products: 'dog'
      };
      var res = reducers.productsReducer(df(''), df(action));

      expect(res).toEqual(action.products);
    });
  });

  describe('SET_PRODUCTS', () => {
    it('Change sorted order from ascending to descending', () => {
      var action = {
        type: 'CHANGE_ORDER',
        order: 'ascending'
      };
      var res = reducers.orderReducer(df(''), df(action));

      expect(res).toEqual(action.order);
    });
  });

  describe('SET_PRODUCTS', () => {
    it('Toggle true/false on discount', () => {
      var action = {
        type: 'TOGGLE_DISCOUNT',
      };
      var res = reducers.orderReducer(df(true), df(action));

      expect(res).toEqual(true);
    });
  });

});
