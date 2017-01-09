
var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var {Provider} = require('react-redux');
var products = require('Input').itemListInput;
import {configure} from 'configureStore';
import Item from 'Item';
import ItemList from 'ItemList';



describe('ItemList', () => {
//Test if Itemlist generates an item for every item in the products state
  it('should render Item for every product in ItemList', () => {

    var store = configure({
      products
    });

    //Render ItemList component with store
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ItemList/>
      </Provider>
    );

    //find the first instance of ItemList in ItemList component and place it into array
    var ItemListInstance = TestUtils.scryRenderedComponentsWithType(provider, ItemList)[0];

    //find all instaces of Item in ItemLists
    var ItemInstance = TestUtils.scryRenderedComponentsWithType(ItemListInstance, Item);
    //compare lenght of items to all instances of Item in ItemList
    expect(ItemInstance.length).toBe(products.length);

  });

});
