import reducer from "./reducer"
import userReducer from "./userReducter"
import { createStore, combineReducers } from 'redux'

const combinedReducers = combineReducers({ reducerA: reducer, reducerB: userReducer })

const store = createStore(combinedReducers, {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;