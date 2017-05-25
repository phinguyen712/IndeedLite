const React = require('react'),
  {connect} = require('react-redux'),
  uuid = require('uuid/v1');

import JobList from 'JobList';

//component for rendering search results
export class SearchResults extends React.Component{

  //render  results  base on search sucess/error
  renderResults(searchResults){
    if(searchResults){
      if(searchResults.results){
        return this.renderMovieLists(searchResults.results);
      }
      if(searchResults.err){
        return (<div>{searchResults.err}</div>);
      }
    }
  }

  //render lists based on current page
  renderMovieLists(results){
    const {currentPage} = this.props,
      jobsPerPage = 25,
      start = currentPage - 1,
      end = start + jobsPerPage;

    const jobsOnPage = results.slice(start, end);

    return (
      jobsOnPage.map((job)=>{
        const key = uuid();
        return(
            <JobList key={key}  job={job}/>
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

        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Company</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {this.renderResults(searchResults)}
          </tbody>
        </table>
      </div>
    );
  }
}


export default connect(
  (state)=>{
    return{
      searchResults: state.searchResults,
      currentPage: state.currentPage
    };
  }
)(SearchResults);
