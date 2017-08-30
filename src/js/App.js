import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import RootComponent from './RootComponent';
import Home from './HomeComponent';
import About from './AboutComponent';



ReactDOM.render( <Router history={browserHistory}>
  <Route path='/' component={RootComponent}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Route path="categories(/:item)" component={About} />
  </Route>
  </Router>, document.getElementById('app'));
