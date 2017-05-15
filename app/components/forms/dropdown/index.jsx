const React = require('react'),
  uuid = require('uuid/v1');

//component for dropdown menus
export class DropDown extends React.Component{
  constructor(props) {
    super(props);
  }

  renderOptions(options){
    return(
      options.map((i)=>{
        const key = uuid();

        return(
          <option key={key} value={i}>{i}</option>
        );
      })
    );
  }

  render(){
    const {name,options}= this.props;

    return(
      <div>
        <form>
          <select onChange={this.props.handleInputChange} ref="params" defaultValue="" name ={name} >
            <option></option>
            {this.renderOptions(options)}
          </select>
        </form>
      </div>
    );
  }
}

export default DropDown;
