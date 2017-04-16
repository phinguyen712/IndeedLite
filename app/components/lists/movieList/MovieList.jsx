const React = require('react');
import LikeButton from 'LikeButton';


//component for rendering list of movies
const MovieList = React.createClass({
  render(){
    const {movie} = this.props;
    return(
      <div className = 'resultBoxesContainer col-xs-12 col-md-6 col-lg-12'>
      <h4>{movie.Title}</h4>
      <h4>{movie.Year}</h4>
      <LikeButton movie = {movie}/>
      <img src = {movie.Poster}></img>
      </div>
    );
  }
});

export default MovieList;
