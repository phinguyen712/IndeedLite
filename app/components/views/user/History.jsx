const React = require('react'),
  {connect} = require('react-redux'),
  uuid = require('uuid/v1');

import HistoryList from 'HistoryList';

//component for rendering search results
const Favorites = React.createClass({

  renderHistoryList(searchHistory){
    return (
      searchHistory.map((history)=>{
        const key = uuid();
        console.log(history);
        return(
            <HistoryList key={key}  history={history}/>
        );
      })
    );
  },

  render () {
    const {searchHistory} = this.props;
    return(
      <div className = 'search_results'>
      <h3 className = 'title'>History</h3>
       {this.renderHistoryList(searchHistory)}
      </div>
    );
  }
});

export default connect()(Favorites);
