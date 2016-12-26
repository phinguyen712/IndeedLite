var React = require('react');
var {connect} = require('react-redux');
import Item from 'Item'

export var ItemList = React.createClass({

//generate a component of each item in the products state
  render:function(){
    var {products} = this.props;
    var items=()=>{
      return(
        products.map(function(product,index){
            return(
              <Item key={product.id} index={index} product={product}/>
            );
        })
      );
    };

    return (
      <div>
          {items()}
      </div>
      );
  }
});


//setting products as state.
export default connect(
  (state)=>{
    return{
      products:state.products
    }
  }
)(ItemList)
