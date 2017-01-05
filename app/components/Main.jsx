var React = require('react');
var {connect} = require('react-redux');
import ItemList from 'ItemList';
import SortByButton from 'SortByButton'

export var Main = React.createClass({
  render(){
    return (
        <div>
          <SortByButton/>
          <ItemList/>
        </div>
      );
    }
});



export default connect()(Main);
