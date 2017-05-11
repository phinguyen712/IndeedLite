const React = require('react'),
  {connect} = require('react-redux'),
  timestamp = require('time-stamp'),
  actions = require('actions');

import SearchParams from 'SearchParams';
import SearchParamsToggle from 'SearchParamsToggle';

export class SearchForm extends React.Component{
  //searh OMDB for lists of movies or series
  searchMovie(){
    const
      {dispatch} = this.props,
      query = this.refs.searchQuery.value;

    $.ajax({
      type: 'POST',
      url: '/search',
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
  }

  render () {

    return(
      <div>
        <form className='search_form' onSubmit={this.searchMovie}>
            <input className='search_input'
              type='text'  placeholder="Search" ref='q' />
            <input className='search_input'
              type='text' placeholder="Location" ref='location'/>
            <button type='submit'
              className='medium_max_one_whole'>
              Search
            </button>
        </form>
        <SearchParamsToggle/>
        <SearchParams/>
      </div>
    );
  }
}


export default connect(
  (state)=>{
    return{
      searchCategory:state.searchCategory,
    };
  }
)(SearchForm);
