const React = require('react'),
  {connect} = require('react-redux'),
  timestamp = require('time-stamp'),
  actions = require('actions');

export class SpToggle extends React.Component{
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


export default connect(SpToggle);
