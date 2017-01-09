var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

//component for Mini Cart
export var Cart= React.createClass({
  cartItems(){

    var {cart} = this.props;
    if(cart.length > 0 ){
      return(
        cart.forEach((cartItem)=>{
          return(
            <li>{cartItem.item}</li>
          )
        })
      )
    }
  }

  render(){
    var {showDisCount, dispatch} = this.props;
    return (
      <div>
        <ul>
          {this.cartItems}
        </ul>
      </div>
    );
  }
});



export default connect(
  (state) => {
    return {
      cart:state.cart
  }
)(Cart);
