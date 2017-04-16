const React = require('react'),
  {connect} = require('react-redux'),
  actions = require('actions');

const SearchForm = React.createClass({
  searchMovie(){
    const
      omdbUrl ='http://omdbapi.com/?s=',
      query = this.refs.searchQuery.value,
      requestUrl = omdbUrl + query;

    $.ajax({
      type: 'GET',
      url: requestUrl,
      dataType:'json',
      success:(s)=>{
        this.populateWithDetailSearch(s.Search);
      }
    });
  },

  //populate search results with detailed data of the movie
  populateWithDetailSearch(movies){
    const omdbUrl ='http://omdbapi.com/?i=',
      {dispatch} = this.props,
      limit = movies.length;

    let asyncCounter = 0;
    const detailedMovies = [];

    movies.forEach((movie,index)=>{
      const requestUrl = omdbUrl + movie.imdbID;
      $.ajax({
        type: 'GET',
        url: requestUrl,
        dataType:'json',
        success:(i)=>{
          asyncCounter++;
          if(asyncCounter === limit - 1){
            detailedMovies[index] = i;
            return dispatch(actions.searchResults({
              Response:'True',
              Search:detailedMovies
            }));
          }
          asyncCounter++;
          detailedMovies[index] = i;
        }
      });
    });
  },


  render () {
    return(
        <form className="Navbar-form" onSubmit={this.searchMovie}>
        <div id="search">
            <input type="text" ref="searchQuery" className="searchBox" />
        </div>
            <button type="submit" id="testbutton"
              className=" glyphicon glyphicon-search btn btn-default">
            </button>
        </form>
    );
  }
});

export default connect()(SearchForm);
