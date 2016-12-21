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
});
