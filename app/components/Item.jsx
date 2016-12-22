var React = require('react');
var {connect} = require('react-redux');


export var Item = React.createClass({
//generate a cimponent of each item in the products state
  render(){
    var {product} = this.props;
    return (
      <div>
        <h1>{product.name}</h1>
      </div>
    );
  }
});


//setting products as state.
export default connect()(Item);
