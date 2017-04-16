const React = require('react'),
  {connect} = require('react-redux');


const Movie = React.createClass({
  render () {
    const imdbID = this.props.params.id;
    return(
      <h1>{imdbID}</h1>
    );
  }
});

export default connect()(Movie);
