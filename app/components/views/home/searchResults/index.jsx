const React = require('react'),
  {connect} = require('react-redux'),
  uuid = require('uuid/v1');

import JobList from 'JobList';

//component for rendering search results
export class SearchResults extends React.Component{

  //render base on search sucess or fail
  renderResults(searchResults){
    if(searchResults.Response === 'True'){
      return this.renderMovieLists(searchResults.Search);
    }else{
      return <h1>{searchResults.Error}</h1>;
    }
  }

  //renders sucess
  renderMovieLists(searchResults){
    return (
      searchResults.map((job)=>{
        const key = uuid();
        return(
            <JobList key={key}  movie={job}/>
        );
      })
    );
  }

  render () {
    const {searchResults} = this.props;
    return(
      <div className = 'search_results'>
        <img className = 'waiting_gif'
          src = 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif'>
        </img>
        {this.renderResults(searchResults)}
      </div>
    );
  }
}


export default connect(
  (state)=>{
    return{
      searchResults:state.searchResults,
    };
  }
)(SearchResults);
