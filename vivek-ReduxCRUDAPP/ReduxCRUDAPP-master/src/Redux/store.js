import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer } from "./reducer";

import thunk from "redux-thunk";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// gaurd --> isFunc == true == > dispatch attach

 let middleware = [thunk]  

const store = legacy_createStore( reducer,(applyMiddleware(...middleware)) 
);

export { store };
 