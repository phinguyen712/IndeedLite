const 	React = require('react'),
  {connect} = require('react-redux');

export class Main extends React.Component{
  render(){
    return (
      <div id= 'main_container'>
        {this.props.children}
      </div>
    );
  }
}

export default connect()(Main);
