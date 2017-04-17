const 	React = require('react'),
  {connect} = require('react-redux');

import Favorites from 'Favorites';
import History from 'History';
import ViewButton from 'ViewButton';

//component for rendering view page
const User = React.createClass({
  render () {
    const {likedMovies, searchHistory} = this.props;
    return (
        <div className = 'view_container'>
          <ViewButton view = '/' />
          <Favorites likedMovies = {likedMovies}/>
          <History searchHistory= {searchHistory}/>
        </div>
    );
  }
});


export default connect(
  (state) => {
    return {
      searchHistory:state.searchHistory,
      likedMovies:state.likedMovies
    };
  }
)(User);
