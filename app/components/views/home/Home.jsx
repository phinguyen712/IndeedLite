const 	React = require('react'),
  {connect} = require('react-redux');

import SearchForm from 'SearchForm';
import SearchResults from 'SearchResults';

const Home = React.createClass({
  render () {
    return (
        <div>
          <SearchForm/>
          <SearchResults/>
        </div>
    );
  }
});

export default connect()(Home);
