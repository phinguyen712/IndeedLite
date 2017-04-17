const React = require('react'),
  {Link} = require('react-router');

//button for swapping between User and Home views
const ViewButton= React.createClass({


  returnIcon(view){
    if(view === '/user'){
      return 'fa fa-book';
    }else{
      return 'fa fa-search';
    }
  },


  render () {
    const {view} = this.props;

    return(
      <Link to = {view}>
        <i className = {'view_icon ' + this.returnIcon(view)}></i>
      </Link>
    );
  }
});

export default ViewButton;
