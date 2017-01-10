var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
import Item from 'Item'

//component for Mini Cart
export var Cart= React.createClass({
  cartItems(){
    var {cart,products} = this.props;

    if(cart.length>0){
        //populate cart with products based on id
        cart = cart.slice().map((itemId)=>{

          var product = products.find((product)=>{
              return product.id === itemId.id ;
            });

          return {product:product,qty:itemId.qty};


        });

        //render Item component for every item in cart
        cart = cart.map((cartItem,index)=>{
            return( <div key={cartItem.product.id}>
                        <Item
                          index={index}
                          product={cartItem.product}
                          qty={cartItem.qty}
                        />
                      <h3>{cartItem.qty}</h3>
                    </div>
                    );
        })

    }
    console.log(cart);
    return cart;
  },

  render(){
    var {showDisCount, dispatch} = this.props;
    return (
      <div>
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
      cart:state.cart,
      products:state.products
    }
  }
)(Cart);
