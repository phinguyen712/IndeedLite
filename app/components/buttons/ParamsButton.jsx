onst React = require('react'),
  {connect} = require('react-redux'),
  actions = require('actions');

//button for toggling extra params options
const CategoryButton = React.createClass({


  toggle(){

  },


  render () {
    const {activeCategory,category} = this.props,
      active = (activeCategory === category)? 'active':'';
    return(
      <button className = {active}
        onClick={()=>this.toggleView(category)}
      >
        {category}
      </button>
    );
  }
});

export default connect()(CategoryButton);
