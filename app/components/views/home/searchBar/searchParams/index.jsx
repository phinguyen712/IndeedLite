const
  React = require('react'),
  {connect} = require('react-redux');

import DropDown from 'DropDown';

export class SearchParams extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    const sort = ['relevance','date'],
      jt = ['fulltime', 'parttime', 'contract', 'internship', 'temporary'];

    return(
      <div>
        <DropDown handleInputChange={this.props.handleInputChange} name='sort' options={sort}/>
        <DropDown handleInputChange={this.props.handleInputChange} name='jt' options={jt}/>
      </div>
    );
  }
}

export default connect(
  (state)=>{
    return{

    };
  }
)(SearchParams);
