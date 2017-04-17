const React = require('react'),
  {connect} = require('react-redux'),
  timestamp = require('time-stamp'),
  actions = require('actions');

import CategoryButton from 'CategoryButton';

const SearchForm = React.createClass({
  searchMovie(){
    const
      omdbUrl ='http://omdbapi.com/?s=',
      {dispatch, searchCategory} = this.props,
      query = this.refs.searchQuery.value + '&type=';

    const requestUrl = omdbUrl + query + searchCategory;
    $.ajax({
      type: 'GET',
      url: requestUrl,
      dataType:'json',
      success:(re)=>{
        if(re.Response ==='False'){
          return dispatch(actions.searchResults(re));
        }
        this.populateWithDetailSearch(re.Search);

        dispatch(actions.addSearchHistory({
          query:query,
          time:timestamp('YYYY/MM/DD')
        }));
      }
    });
  },

  //Do API request to Omdb for each movie in the list returned
  //This is to obtain an even more detailed list
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
    const {searchCategory} = this.props;
    return(
      <div>
        <form className='search_form' onSubmit={this.searchMovie}>
            <input className='search_input'
            type='text' ref='searchQuery' />
            <button type='submit'
              className='medium_max_one_whole'>
              Search {searchCategory}
            </button>

        </form>
        <div>
          <CategoryButton activeCategory = {searchCategory}
           category = 'movie'/>
          <CategoryButton activeCategory = {searchCategory}
          category = 'series'/>
        </div>
      </div>
    );
  }
});

export default connect(
  (state)=>{
    return{
      searchCategory:state.searchCategory,
    };
  }
)(SearchForm);
