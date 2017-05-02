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
      {dispatch, searchCategory} = this.props,
      query = this.refs.searchQuery.value;


    $.ajax({
      type: 'GET',
      url: '/yes',
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
