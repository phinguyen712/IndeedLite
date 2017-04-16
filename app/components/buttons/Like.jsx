const React = require('react');


//component for rendering list of movies
const Like = React.createClass({
  render(){
    const {movie} = this.props;
    return(
      <div className = 'resultBoxesContainer col-xs-12 col-md-6 col-lg-12'>
      <h4>{movie.Title}</h4>
      <h4>{movie.Year}</h4>
      <img src = {movie.Poster}></img>
      </div>
    );
  }
});

export default MovieList;
