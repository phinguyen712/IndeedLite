const 	React = require('react'),
        {connect} = require('react-redux'),
        {Link, IndexLink} = require('react-router');


export const Main = React.createClass({

  render () {
    return (
        <div>
          <h1>Heading</h1>
        </div>
    );
  }
});

export default connect(
  (state) => {
    return {
    };
  }
)(Main);
