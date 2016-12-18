var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var {Provider} = require('react-redux');
var store = require('configureStore').configure();
import Main from 'Main';
var actions = require('actions');
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
       store.dispatch(actions.updateProducts(returnData.products));
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
