var React = require('react');
var {connect} = require('react-redux');
import ItemList from 'ItemList';
import SortByButton from 'SortByButton';
var {Link, IndexLink} = require('react-router');

export var Main = React.createClass({
  render(){
    return (
        <div>
          <SortByButton/>
          <ItemList/>
          <button><Link to="/Cart" >Cart</Link></button>
        </div>
      );
    }
});



export default connect()(Main);
