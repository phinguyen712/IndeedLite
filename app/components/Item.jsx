var React = require('react');
var {connect} = require('react-redux');

// component for each Item
export var Item = React.createClass({

  render () {
    var {product} = this.props;

    return (
        <a>
          <img className="itemImg" src={product.mainImage.ref} />
          <h4>{product.name}</h4>
          <h5>{product.defaultPriceInCents}</h5>
        </a>
    );
  }
});

// setting products as state.
export default connect()(Item);
