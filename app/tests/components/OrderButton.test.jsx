var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var products = require('Input').itemListInput;
var {Provider} = require('react-redux');
import {configure} from 'configureStore';
import OrderButton from 'OrderButton';


//OrderButton should change order in store when clicked
describe('OrderButton', () => {

  it('should change order from descending to ascending when clicked ', () => {

    var order="descending"
    var store = configure({
      products,
      order,
    });

    //Render OrderButton with store
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <OrderButton/>
      </Provider>
    );
    //set to button node
    var $el = $(ReactDOM.findDOMNode(provider));
    //simulate the OrderButton being clicked
    TestUtils.Simulate.click($el[0]);
    //order should be updated to ascending
    expect(store.getState().order).toEqual("ascending");

  });
});
