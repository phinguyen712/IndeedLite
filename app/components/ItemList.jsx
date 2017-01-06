var React = require('react');
var {connect} = require('react-redux');
import Item from 'Item'

//component for displaying items
export var ItemList = React.createClass({

//generate Item component of each array item in the products reducer
  displayItems(){

    var {showDisCount,products} = this.props;

    return(
      products.map(function(product,index){
          var displayItem = <Item
                                  key={product.id}
                                  index={index}
                                  product={product}
                              />
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
