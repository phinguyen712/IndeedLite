const React = require('react'),
  {connect} = require('react-redux');

export class SearchParams extends React.Component{

  showSearchInputs () {

  }

  render () {
    return(
      <ul>
        {this.showSearchInputs()}
          <input className='search_input' type='text'  placeholder="Search" ref='searchQuery' />
      </ul>
    );
  }
}


export default connect(
  (state)=>{
    return{
      searchCategory:state.searchCategory,
    };
  }
)(SearchParams);
