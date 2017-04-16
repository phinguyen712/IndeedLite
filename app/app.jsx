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




ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Main} />
    </Router>
  </Provider>
  ,
  document.getElementById('app')
);
