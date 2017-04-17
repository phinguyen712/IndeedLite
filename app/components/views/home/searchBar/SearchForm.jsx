const React = require('react'),
  {connect} = require('react-redux'),
  timestamp = require('time-stamp'),
  actions = require('actions');

import CategoryButton from 'CategoryButton';
import ViewButton from 'ViewButton';

const SearchForm = React.createClass({

  //searh OMDB for lists of movies or series
  searchMovie(){
    const
      omdbUrl ='http://omdbapi.com/?s=',
      {dispatch, searchCategory} = this.props,
      query = this.refs.searchQuery.value;

    const requestUrl = omdbUrl + query + '&type=' + searchCategory;

    //display the waiting gif
    $('.waiting_gif').css('display','block');

    $.ajax({
      type: 'GET',
      url: requestUrl,
      dataType:'json',
      success:(re)=>{
        if(re.Response ==='False'){
          return dispatch(actions.searchResults(re));
        }
        this.populateWithDetailSearch(re.Search);
        //add query to search history
        dispatch(actions.addSearchHistory({
          query:query,
          time:timestamp('YYYY/MM/DD')
        }));
      }
    });
  },


  //API request to Omdb for each movie in the list returned
  //This is to obtain a more detailed list
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
          //remove waiting gf
          $('.waiting_gif').css('display','none');
          //Uses a couter to
          //wait for all async request to finish, then initiate action/reducer
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
        <ViewButton view = '/user'/>
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
