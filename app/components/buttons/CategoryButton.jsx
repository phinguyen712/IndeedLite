const React = require('react'),
  {connect} = require('react-redux'),
  actions = require('actions');

const CategoryButton = React.createClass({
  changeCategory(category){
    const {dispatch} = this.props;
    dispatch(actions.changeCategory(category));
  },
  render () {
    const {category} = this.props;
    return(
      <button onClick={()=>this.changeCategory(category)}>
        {category}
      </button>
    );
  }
});

export default connect()(CategoryButton);
