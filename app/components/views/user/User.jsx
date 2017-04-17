const 	React = require('react'),
  {connect} = require('react-redux');

import Favorites from 'Favorites';
import History from 'History';
import ViewButton from 'ViewButton';

const User = React.createClass({
  render () {
    const {likedMovies} = this.props;
    return (
        <div id = 'home_container'>
          <ViewButton view = '/' />
          <Favorites likedMovies = {likedMovies}/>
        </div>
    );
  }
});


export default connect(
  (state) => {
    return {
      likedMovies:state.likedMovies
    };
  }
)(User);
