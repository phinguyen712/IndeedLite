var React = require('react');
var {connect} = require('react-redux');


export var DisCount= React.createClass({
//generate a cimponent of each item in the products state
  render(){
    var {product} = this.props;
    return (
      <div className="item">
        <img className="itemImg" src={product.mainImage.ref} />
        <h4>{product.name}</h4>
        <h5>{product.defaultPriceInCents}</h5>
      </div>
    );
  }
});


//setting products as state.
export default connect()(DisCount);
