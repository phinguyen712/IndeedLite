var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
import Item from 'Item'

//component for Mini Cart
export var Cart= React.createClass({


  cartItems(){
    var {cart,products, dispatch} = this.props;


        //populate cart reducer by pulling from pulling product object 
        cart = cart.slice().map((itemId)=>{

          var product = products.find((product)=>{
                return product.id === itemId.id ;
          });

          return {product:product,qty:itemId.qty};
        });

        //render Item component for every item in cart
        return( cart.map((cartItem,index)=>{
          return(
            <div key={cartItem.product.id}>
                <Item
                  index={index}
                  product={cartItem.product}
                  qty={cartItem.qty}
                />
                <h3>qty.{cartItem.qty}</h3>
                <button className="dropbtn"
                  onClick={()=>{dispatch(actions.removeFromCart(cartItem.product.id))
                  }}>
                </button>
              </div>
            );
        })
      )
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
