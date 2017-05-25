const React = require('react'),
  {connect} = require('react-redux'),
  uuid = require('uuid/v1');

//component for dropdown menus
export class CheckBoxes extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isGoing: false,
    };

  }

  renderCheckBoxes(options){
    const {searchParams} = this.props;
    let checked = false;

    if(searchParams.i){
      checked = true;
    }

    return(
      options.map((i)=>{
        const key = uuid();

        return(
          <label key={key}>
          {i}
            <input
                value={i}
                type="checkbox"
                checked={checked}
                onChange={this.props.handleInputChange} />
          </label>
        );
      })
    );
  }

  render(){
    const {name,options}= this.props;

    return(
      <div>
        <form>
          {this.renderCheckBoxes(options)}
        </form>
      </div>
    );
  }
}


export default connect(
  (state)=>{
    return{
      searchParams:state.searchParams
    };
  }
)(CheckBoxes);
