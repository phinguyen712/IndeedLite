const 	React = require('react'),
  {connect} = require('react-redux');

import ViewButton from 'ViewButton';


const Main = React.createClass({
  render:function(){
    return (
      <div id= 'main_container'>
        {this.props.children}
      </div>
    );
  }
});

export default connect()(Main);
