const React = require('react'),
  {Link} = require('react-router');

import LikeButton from 'LikeButton';

//component for rendering list of movies
const MovieList = React.createClass({
  render(){
    const {movie} = this.props;
    return(
      <div>
        <h4><Link to = {'/movie/' + movie.imdbID} >{movie.Title}</Link></h4>
        <h4>{movie.Year}</h4>
          <LikeButton movie = {movie}/>
        <img src = {movie.Poster}></img>
      </div>
    );
  }
});

export default MovieList;
