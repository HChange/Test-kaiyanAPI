import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import home from "../pages/home/reducer"
import thunk from "redux-thunk";

const reducer = combineReducers({
    home
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
