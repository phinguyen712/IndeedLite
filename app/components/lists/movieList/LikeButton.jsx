const React = require('react'),
  {connect} = require('react-redux'),
  actions = require('actions');



//component for rendering list of movies
const LikeButton = React.createClass({
  toggleLike(movie){
    const {dispatch} = this.props;
    dispatch(actions.addLikeMovie(movie));
  },

  render(){
    const {movie} = this.props;
    return(
      <button
        onClick={()=>this.toggleLike(movie)}
        >
        like Button
      </button>

    );
  }
});

export default connect()(LikeButton);
