const React = require('react'),
  {connect} = require('react-redux'),
  uuid = require('uuid/v1');



import MovieList from 'MovieList';

//component for rendering search results
const SearchResults = React.createClass({

  renderResults(searchResults){
    if(searchResults.Response === 'True'){
      return this.renderMovieLists(searchResults.Search);
    }else{
      return <h1>{searchResults.Error}</h1>;
    }
  },

  renderMovieLists(searchResults){
    return (
      searchResults.map((movie)=>{
        const key = uuid();
        return(
            <MovieList key={key}  movie={movie}/>
        );
      })
    );
  },

  render () {
    const {searchResults} = this.props;
    return(
      <div>
      {this.renderResults(searchResults)}
      </div>
    );
  }
});

export default connect(
  (state)=>{
    return{
      searchResults:state.searchResults,
    };
  }
)(SearchResults);