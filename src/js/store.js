import { applyMiddleware, createStore, combineReducers } from "redux"

import logger from "redux-logger"
import thunk from "redux-thunk"

import TodosReducer from './reducers/TodosReducer';

const rootReducer = combineReducers({
    todos: TodosReducer
})

const middleware = applyMiddleware( thunk);

export default createStore(rootReducer, middleware)
