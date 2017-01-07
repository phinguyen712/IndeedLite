var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

//component for discount checkbox
export var DisCount= React.createClass({
  render(){
    var {showDisCount, dispatch} = this.props;
    return (
      <div>
        <form ref="toggleDisCounts">
            <label>Show Discount</label>
            <input ref="toggleDiscount" type="checkbox" checked={showDisCount} onChange={
                //update showDisCount reducer to either true or false whenever checkbox is clicked
              ()=>{dispatch(actions.toggleDiscount())}
            }/>
          </form>
        </div>
    );
  }
});


//set showDiscount from store
export default connect(
  (state) => {
    return {
      showDisCount: state.showDisCount
    }
  }
)(DisCount);
