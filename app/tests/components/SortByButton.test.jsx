var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var {Provider} = require('react-redux');
var products = require('Input').itemListInput;
import {configure} from 'configureStore';
import SortByButton from 'SortByButton';
import Item from 'Item';
import ItemList from 'ItemList'



describe('SortByButton', () => {
//test that SortByButton sorts parameters name/price/date by
//ascendng/descending when clicked
  it('should sort product name by  descending', () => {

    var order = "descending";
    var store = configure({
      products,
      order,
    
    });

    //Render ItemList component with store
    var sortByButton = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <SortByButton/>
      </Provider>
    );
    //retrieve node for the Name button
    var $el = $(ReactDOM.findDOMNode(sortByButton)).find("a");
    //simulate the Name button being clicked
    TestUtils.Simulate.click($el[0]);
    //obtain product name that was sorted
    var sortedProductByName = store.getState().products.map((product)=>{
      return product.name;
    })

    expect(sortedProductByName).toEqual(["Aaa","Cab","ZZZ"]);

  });
});
