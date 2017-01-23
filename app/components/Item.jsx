var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var Item = React.createClass({
//generate a component of each item in the products state
  render(){
    
    var {product,dispatch} = this.props;

    return (
        <a>
          <img className="itemImg" src={product.mainImage.ref} />
          <h4>{product.name}</h4>
          <h5>{product.defaultPriceInCents}</h5>
        </a>
    );
  }
});


//setting products as state.
export default connect()(Item);
