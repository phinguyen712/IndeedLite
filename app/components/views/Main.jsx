const 	React = require('react'),
  {connect} = require('react-redux');


const Main = React.createClass({
  render:function(){
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});



export default connect()(Main);
