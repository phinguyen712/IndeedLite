
var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var {Provider} = require('react-redux');
var products = require('Input').itemListInput;
import {configure} from 'configureStore';
import Item from 'Item';
import ItemList from 'ItemList';
import {DisCount} from 'DisCount';
import SortByButton from 'SortByButton'

//test if DisCount only show discounted Items
describe('DisCount', () => {
  it('Filter out items that are under 2000 price', () => {

    //simulate discount checkbox
    var showDisCount = false;

    var store = configure({
      showDisCount,
      products
    });

    var action = {
        type:'TOGGLE_DISCOUNT'
    };

    var spy = expect.createSpy();

    var tester = TestUtils.renderIntoDocument(
      <Provider store={store}>
          <DisCount dispatch={spy}/>
      </Provider>
    );

    TestUtils.Simulate.change($(ReactDOM.findDOMNode(tester)).find('input')[0]);

    expect(spy).toHaveBeenCalledWith(action);

  });
});
