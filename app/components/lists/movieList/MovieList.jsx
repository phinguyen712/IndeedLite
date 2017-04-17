const React = require('react'),
  {Link} = require('react-router');

import LikeButton from 'LikeButton';

//component for rendering list of movies
const MovieList = React.createClass({
  ratingColor(rating){
    if(rating >= 6){
      return 'good_rating';
    }
    return 'bad_rating';
  },

  render(){
    const {movie} = this.props;



    return(
        <div id = 'movie_list' className = 'clear'>
          <div className = 'one_fourth'>
            <h3 className = {this.ratingColor(movie.imdbRating)}>
            {movie.imdbRating}
            </h3>
          </div>
          <img  className ='one_fourth' src ={movie.Poster}/>
          <div className = 'two_fourth'>
            <div className = 'content_container'>
              <h4>
                <Link
                  to = {'/movie/' + movie.imdbID}
                >
                {movie.Title}({movie.Year})
                </Link><LikeButton movie = {movie}/>
                <p>
                  Rated:{movie.Rated} Actors:{movie.Actors}
                </p>
                <p>{movie.Plot}</p>
              </h4>
            </div>
          </div>}
        </div>
    );
  }
});

export default MovieList;
