import { legacy_createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"

import productReducer from "./products/reducer"

const rootReducer = combineReducers({ ecommerceData: productReducer });

const composeEnhancers = window.__REDUX_DEVTOOLS_COMPOSE__ || compose

const store = legacy_createStore(rootReducer, composeEnhancers(thunk))

export {store}