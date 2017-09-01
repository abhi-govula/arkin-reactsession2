import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import TodosReducer from './reducers/TodosReducer';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import RootComponent from './RootComponent';
import Home from './HomeComponent';
import About from './AboutComponent';


const rootReducer = combineReducers({
  todos: TodosReducer,
});


const store = createStore(rootReducer );
store.dispatch({type: 'ADD_TODO', value: 'New Todo'});
store.dispatch({type: 'ADD_TODO', value: 'Second Todo'});
store.dispatch({type: 'ADD_TODO', value: 'Third Todo'});
store.dispatch({type: 'ADD_TODO', value: 'Fourth Todo'});
console.log(store.getState());

ReactDOM.render( <Provider store={store}>
<Router history={browserHistory}>
  <Route path='/' component={RootComponent}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Route path="categories(/:item)" component={About} />
  </Route>
</Router>
</Provider>, document.getElementById('app'));


