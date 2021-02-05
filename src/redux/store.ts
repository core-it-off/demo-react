import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import thunkMiddleware from 'redux-thunk';

const middlewareEnhancer = applyMiddleware(thunkMiddleware);

const store = createStore(reducer, middlewareEnhancer);
export default store;
