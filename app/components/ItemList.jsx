var React = require('react');
var {connect} = require('react-redux');
import Item from 'Item'

export var ItemList = React.createClass({

//generate a cimponent of each item in the products state
  items(){
    var {products} = this.props;
    return(
      products.map(function(product,index){
          return(
            <Item key={product.id} index={index} product={product}/>
          );
      })
    );
  },

  render(){
    return (
      <div>
          {this.items()}
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
