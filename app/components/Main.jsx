var React = require('react');
var {connect} = require('react-redux');


var Main = React.createClass({
  render:function(){
    return (
        <h1>this is the main page</h1>
      );
    }
});



export default connect()(Main)
