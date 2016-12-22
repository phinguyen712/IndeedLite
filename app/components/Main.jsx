var React = require('react');
var {connect} = require('react-redux');
import ItemList from 'ItemList'

export var Main = React.createClass({
  render:function(){
    return (
        <div>
          <ItemList/>
        </div>
      );
    }
});



export default connect()(Main);
