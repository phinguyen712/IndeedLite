const
  React = require('react'),
  {connect} = require('react-redux'),
  timestamp = require('time-stamp'),
  debounce = require('throttle-debounce/debounce'),
  actions = require('actions');

import SearchParams from 'SearchParams';
import SearchParamsToggle from 'SearchParamsToggle';

export class SearchForm extends React.Component{

  constructor(props) {
    super(props);
    //debounce only runs handleInputChange method after certain delays
    this.callAjax = debounce(300,this.callAjax);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  searchJobs(event){
    event.preventDefault();
  }

  handleInputChange(event){
    const
      value = event.target.value,
      key = event.target.name;

      console.log("hey")
    //call an async method because we are using debounce to delay user's input
    this.callAjax({key:key,value:value});
  }

  callAjax(eventKeyValue){
    const {dispatch} = this.props;

    dispatch(actions.updateSearchParams(eventKeyValue));
  }

  render () {
    return(
      <div>
        <form className='search_form' onSubmit={this.searchJobs.bind(this)}>
            <input
              className='search_input'
              type='text'
              name='q'
              placeholder="Search"
              onChange={this.handleInputChange} />
            <input
              className='search_input'
              type='text'
              name='location'
              placeholder="Location"
              onChange={this.handleInputChange}/>
            <button type='submit'
              className='medium_max_one_whole'>
              Search Job
            </button>
        </form>
        <SearchParamsToggle/>
        <SearchParams handleInputChange = {this.handleInputChange}/>
      </div>
    );
  }
}


export default connect(
  (state)=>{
    return{
      updateSearchParams:state.updateSearchParams
    };
  }
)(SearchForm);
