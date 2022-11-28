import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import counterReducer from './features/Counter/reducer';

let rootReducers = combineReducers({
  counter: counterReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
let store = createStore(rootReducers, composeEnhancers(applyMiddleware));

export default store;
