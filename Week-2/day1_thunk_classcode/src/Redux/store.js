import { legacy_createStore as createStore ,compose,applyMiddleware} from "redux";

import {reducer} from "./reducer"
import thunk from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const customMiddleware=({dispatch})=>(next)=>(action)=>{
//     if(typeof action==="function"){
//         return action(dispatch);
//     }
//     else if(typeof action==="object"){
//         return next(action);
//     }
// }

const store=createStore(reducer,composeEnhancers(applyMiddleware(thunk)));

export{store}