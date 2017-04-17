const React = require('react'),
  {connect} = require('react-redux'),
  {Link} = require('react-router');

const ViewButton= React.createClass({
  returnIcon(view){
    if(view === 'user'){
      return 'fa fa-book';
    }else{
      return 'fa fa-search';
    }
  },

  render () {
    const {favorites, view} = this.props;

    return(
      <Link to = {view}>
        <i className = {this.returnIcon(view)}></i>
      </Link>
    );
  }
});

export default connect()(ViewButton);
