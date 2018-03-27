import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import thunk from 'redux-thunk';
import reducer from "./reducers";

export default createStore(reducer, applyMiddleware(thunk));


