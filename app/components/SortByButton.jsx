var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
import ItemList from 'ItemList';
import OrderButton from 'OrderButton';
import DisCount from 'DisCount';


// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {

  if (!event.target.matches('.dropbtn')) {

      var dropdowns = document.getElementsByClassName("dropdown-content");

      var i;

      for (i = 0; i < dropdowns.length; i++) {

          var openDropdown = dropdowns[i];

          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
          }

      }

  }

};


//toggle dropdown menu when button is clicked
var toggleDropDown=()=>{
    document.getElementById("myDropdown").classList.toggle("show");
};

//Component for Sory By Button
export var SortByButton = React.createClass({
  // method for sorting name,date,price by descending/ascending
  sortCategory(sortBy){

      var { order, products, dispatch} = this.props;
      //update sortBy Reducer
      dispatch(actions.sortBy(sortBy));
      //update product reducer base on new sorted parameters
      dispatch(actions.updateProducts({
                                      products:products,
                                      order:order,
                                      sortBy:sortBy
                                    }));
  },

  render(){
      return (
        <div className="dropdown">
          <button onClick={toggleDropDown} className="dropbtn">Sort By</button>
          <div id="myDropdown" className="dropdown-content">
            <a className="Name" onClick={()=>this.sortCategory('name')}>Name</a>
            <a className="Price" onClick={()=>this.sortCategory('defaultPriceInCents')}>Price</a>
            <a className="Date" onClick={()=>this.sortCategory('createdAt')}>Date</a>
          </div>
          <OrderButton/>
          <DisCount/>
        </div>
        );
      }
})




export default connect(
  (state)=>{
    return{
      products:state.products,
      order:state.order
    }
  }
)(SortByButton)
