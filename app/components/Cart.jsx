var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

// component for Mini Cart
export var Cart = React.createClass({

  cartItems () {
    var {cart, products, dispatch} = this.props;

    // populate cart reducer by pulling from product object
    cart = cart.slice().map((itemId) => {
      var product = products.find((product) => {
        return product.id === itemId.id;
      });

      return {product: product, qty: itemId.qty};
    });

        // render Item component for every item in cart
    return (cart.map((cartItem, index) => {
      return (
          <div className="cart-row" key={cartItem.product.id}>
              <div className="cart-item">
                  <Item
                    index={index}
                    product={cartItem.product}
                    qty={cartItem.qty}
                  />
              </div>
              <div className="cart-info">
                  <h3>qty.{cartItem.qty}</h3>
                  <button className="delete-button"
                    onClick={() => {
                      dispatch(actions.removeFromCart(cartItem.product.id));
                    }}><h4>Remove</h4>
                  </button>
              </div>
          </div>
      );
    })
    );
  },

  render () {
    return (
      <div>
        <h1 className="minicart-title">Your mini cart</h1>
        <ul>
          {this.cartItems()}
        </ul>
      </div>
    );
  }

});

export default connect(
  (state) => {
    return {
      cart: state.cart,
      products: state.products
    };
  }
)(Cart);
