const React = require('react'),
  {connect} = require('react-redux'),
  uuid = require('uuid/v1');



import MovieList from 'MovieList';

//component for rendering search results
const Favorites = React.createClass({


  renderMovieLists(favorites){
    return (
      favorites.map((movie)=>{
        const key = uuid();
        return(
            <MovieList key={key}  movie={movie}/>
        );
      })
    );
  },


  render () {
    const {likedMovies} = this.props;

    return(
      <div className = 'search_results'>
        <h3 className = 'title'>Favorites</h3>
        {this.renderMovieLists(likedMovies)}
      </div>
    );
  }
});

export default connect()(Favorites);
