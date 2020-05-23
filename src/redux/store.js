import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import {createLogger} from "redux-log"

import rootReducer from "./index"

const middlewareList = [];
middlewareList.push(thunk);


const middleware = applyMiddleware(...middlewareList);

const store = createStore(rootReducer, middleware);

export default store;

