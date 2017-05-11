const 	React = require('react'),
  {connect} = require('react-redux');

import SearchForm from 'SearchForm';
import SearchResults from 'SearchResults';

//component for rendering home page
export class Home extends React.Component{
  render () {
    return (
        <div className = 'view_container'>
          <SearchForm/>
          <SearchResults/>
        </div>
    );
  }
}

export default connect()(Home);
