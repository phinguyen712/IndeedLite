const
  React = require('react'),
  {connect} = require('react-redux');

export class SearchParamsToggle extends React.Component{
  //searh OMDB for lists of movies or series
  render () {
    return(
      <div>
        <button>
          <i className="fa fa-sliders"></i>
        </button>
      </div>
    );
  }
}

export default connect()(SearchParamsToggle);
