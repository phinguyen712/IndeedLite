const React = require('react'),
  {connect} = require('react-redux'),
  timestamp = require('time-stamp'),
  actions = require('actions');

const SearchForm = React.createClass({

  showSearchInputs () {

  },

  render () {
    const {searchCategory} = this.props;
    return(
      <ul>
        {this.showSearchInputs()}
          <input className='search_input' type='text'  placeholder="Search" ref='searchQuery' />
      </ul>
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
