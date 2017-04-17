const 	React = require('react'),
  {connect} = require('react-redux');

import SearchForm from 'SearchForm';
import SearchResults from 'SearchResults';
import ViewButton from 'ViewButton';

const Home = React.createClass({
  render () {
    return (
        <div id = 'home_container'>
         <ViewButton view = 'user'/>
          <SearchForm/>
          <SearchResults/>
        </div>
    );
  }
});

export default connect()(Home);
