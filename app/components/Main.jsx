var React = require('react');
var {connect} = require('react-redux');
import ItemList from 'ItemList';
import SortByButton from 'SortByButton';
var {Link, IndexLink} = require('react-router');

export var Main = React.createClass({

  totalCartItems(){

    var {cart} = this.props;

    var totalQty = 0;

    cart.forEach((cartItem)=>{
      totalQty += cartItem.qty
    });

    return totalQty;
  },

  render(){
    return (
        <div>
          <div className="head-image">
            <Link className="Shopping-Cart" to="/Cart">
              <h1><i className="fa fa-shopping-cart"></i>
              <span className="qty">{this.totalCartItems()}</span>
              </h1>
            </Link>
          </div>
          <SortByButton/>
          <ItemList/>
        </div>
      );
    }
});



export default connect(
  (state) => {
    return {
      cart: state.cart
    }
  }
)(Main);
