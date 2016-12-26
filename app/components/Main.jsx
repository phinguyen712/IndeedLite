var React = require('react');
var {connect} = require('react-redux');
import ItemList from 'ItemList';
import SortButton from 'SortButton'

export var Main = React.createClass({
  render(){
    return (
        <div>
          <SortButton/>
          <ItemList/>
        </div>
      );
    }
});



export default connect()(Main);
