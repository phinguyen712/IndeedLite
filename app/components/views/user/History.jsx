
const React = require('react'),
  {connect} = require('react-redux'),
  uuid = require('uuid/v1');





//component for rendering search results
const History = React.createClass({


  render () {

    return(
      <div className = 'search_results'>
        hey
      </div>
    );
  }
});

export default connect()(History);
