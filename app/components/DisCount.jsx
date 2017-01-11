var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

//component for discount checkbox
export var DisCount= React.createClass({
  render(){

      var {showDisCount, dispatch} = this.props;
      //update showDisCount reducer to either true or false whenever checkbox is clicked
      return (

          <form className="discount">
              <label for="checkbox">Show Discount</label>
              <input ref="toggleDiscount"
                className="checkbox-discount"
                type="checkbox"
                checked={showDisCount}
                onChange={()=>{dispatch(actions.toggleDiscount())}
              }/>
            </form>

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
