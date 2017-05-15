const
  React = require('react'),
  ReactDOM = require('react-dom'),
  {Route, Router, IndexRoute, hashHistory} = require('react-router'),
  {Provider} = require('react-redux'),
  store = require('configureStore').configure();

import Main from 'Main';
import Home from 'Home';



// App css
require('style!css!sass!applicationStyles');


ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path = '/' component={Main}>
        <IndexRoute  component={Home}/>
      </Route>
    </Router>
  </Provider>
  ,
  document.getElementById('app')
);
