const React = require('react'),
  {connect} = require('react-redux'),
  actions = require('actions');

//button for changing search categories
const CategoryButton = React.createClass({
  changeCategory(category){
    const {dispatch} = this.props;
    dispatch(actions.changeCategory(category));
  },


  render () {
    const {activeCategory,category} = this.props,
      active = (activeCategory === category)? 'active':'';
    return(
      <button className = {active}
      onClick={()=>this.changeCategory(category)}
      >
        {category}
      </button>
    );
  }
});

export default connect()(CategoryButton);
