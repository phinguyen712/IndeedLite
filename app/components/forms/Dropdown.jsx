const React = require('react');

//component for rendering list of movies
export class DropDown extends React.Component{
  render(){
    const {history} = this.props;

    return(
        <div>
          <h4>{history.query}  at  {history.time} </h4>
        </div>
    );
  }
}

export default DropDown;
