const 	React = require('react'),
  {connect} = require('react-redux');

import SearchForm from 'SearchForm';
import SearchResults from 'SearchResults';

const Main = React.createClass({
  render () {
    return (
        <div>
          <SearchForm/>
          <SearchResults/>
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
