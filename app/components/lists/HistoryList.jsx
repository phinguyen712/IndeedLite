const React = require('react');

//component for rendering list of movies
const HistoryList = React.createClass({
  render(){
    const {history} = this.props;

    return(
        <div>
          <h4>{history.query}  at  {history.time} </h4>
        </div>
    );
  }
});

export default HistoryList;
