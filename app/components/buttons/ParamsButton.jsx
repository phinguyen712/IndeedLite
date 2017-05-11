const React = require('react'),
  {connect} = require('react-redux');

//button for toggling extra params options
export class CategoryButton extends React.Component{
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
}

export default connect()(CategoryButton);
