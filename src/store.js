import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState=[];
const middleWare=[thunk];//arry of middleware that we will be using
// export default store=createStore(()=>[],{},applyMiddleware());

const store=createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleWare),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())); 
export default store;