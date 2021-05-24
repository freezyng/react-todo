import {createStore, applyMiddleware, compose} from 'redux';
import {todoReducer} from './reducer';
import thunk from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(todoReducer, composeEnhancers(compose(applyMiddleware(thunk))));


window.store = store;

export {store};