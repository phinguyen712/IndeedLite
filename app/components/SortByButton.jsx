var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
import ItemList from 'ItemList'
import OrderButton from 'OrderButton'


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
  sortCategory(category){
    var {order,products,dispatch} = this.props;
    //create copy of products so we don't mutate state
    products = products.slice()
    //sort products by order reducer (ascending/descending)
    products = products.sort((a,b)=>{
                  a = a[category];

                  b = b[category];
                  //variable for determining if order is descending/ascending
                  var order = (order === "descending") ? 1:-1;

                  if(a>b){
                    return order;
                  }else if(a===b){
                    return 0;
                  }else{
                    return -1*(order);
                  }
    })
    dispatch(actions.updateProducts(products));
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
