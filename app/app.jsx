var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var {Provider} = require('react-redux');
var store = require('configureStore').configure();
var actions = require('actions');
import Main from 'Main';
// Load foundation


// App css
require('style!css!sass!applicationStyles');
//Get JSON data and pre load products onto state with Redux
var preLoadApiData = (nextState,replace,callback)=>{
    $.ajax({
     type: "GET",
     url: "https://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js",
     dataType:"json",
     success:function(returnData){

       store.dispatch(actions.updateProducts({
          products:returnData.products,
          order:store.getState().order,
       }));

       callback();
     }
  })
}



ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Main} onEnter={preLoadApiData} />
    </Router>
  </Provider>
  ,
  document.getElementById('app')
);

export default preLoadApiData;
