const React = require('react');

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

    const imgUrl = (movie.Poster === 'N/A')?
    'https://theiimastore.com/assets/img/no_img.png': movie.Poster;

    return(
        <div id = 'movie_list' className = 'clear'>
          <div className = 'one_fourth'>
            <h3 className = {this.ratingColor(movie.imdbRating)}>
            {movie.imdbRating}
            </h3>
          </div>
          <img  className ='one_fourth' src ={imgUrl}/>
          <div className = 'two_fourth'>
            <div className = 'content_container'>
              <h4>
                {movie.Title}({movie.Year})
                <LikeButton movie = {movie}/>
              </h4>
              <p>
                Rated:{movie.Rated} Actors:{movie.Actors}
              </p>
              <p>{movie.Plot}</p>
            </div>
          </div>
        </div>
    );
  }
});

export default MovieList;
