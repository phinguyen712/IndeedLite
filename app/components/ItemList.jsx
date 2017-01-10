var React = require('react');
var {connect} = require('react-redux');
import Item from 'Item'
var actions = require('actions');


export var ItemList = React.createClass({

//generate Item component of each array item in the products reducer
  displayItems(){

      var {showDisCount,products, dispatch} = this.props;

      return(
        products.map((product,index)=>{

            var displayItem =
              <div key={product.id} className="item">
                <Item index={index} product={product}/>
                <button className="dropbtn"
                  onClick={()=>{dispatch(actions.addToCart(product.id))}}>
                  Add To Cart
                </button>
              </div>

            //return only discounted items if checkbox is true
            if(showDisCount){
              return  (product.defaultPriceInCents <= 2000)?displayItem:"";
            }else{
              return displayItem;
            }
        })
      );
  },

  render:function(){
    return (
      <div>
          {this.displayItems()}
      </div>
      );
  }

});


//setting products as state.
export default connect(
  (state)=>{
    return{
      products:state.products,
      showDisCount:state.showDisCount
    }
  }
)(ItemList)
