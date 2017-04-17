const React = require('react'),
  ReactDOM = require('react-dom'),
  {Route, Router, IndexRoute, hashHistory} = require('react-router'),
  {Provider} = require('react-redux'),
  store = require('configureStore').configure();

import Main from 'Main';
import Home from 'Home';
import User from 'User';
import Movie from 'Movie';

// App css
require('style!css!sass!applicationStyles');


ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path = '/' component={Main}>
        <IndexRoute  component={Home}/>
        <Route path = 'user' component={User} />
        <Route path = "movie/:id" component={Movie} />
      </Route>
    </Router>
  </Provider>
  ,
  document.getElementById('app')
);
