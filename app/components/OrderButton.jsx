var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
import ItemList from 'ItemList'
import OrderButton from 'OrderButton'

// Close the dropdown menu if the user clicks outside of it
export var SortButton = React.createClass({
//sort name,date,price by order
  orderIcon(){
    var {order} =this.props;

    if(order === 'descending'){
      return 'fa fa-sort-amount-desc'
    }else{
      return 'fa fa-sort-amount-asc'
    }
  },
  sortOrder(){
    var {order, dispatch} = this.props;

    if(order === "descending"){
      dispatch(actions.changeOrder('ascending'));
    }else{
      dispatch(actions.changeOrder('descending'));
    }
  },
  render(){
    return (
      <button onClick={this.sortOrder} className={this.orderIcon()}></button>
      );
    }
})




export default connect(
  (state)=>{
    return{
      order:state.order
    }
  }
)(SortButton)
