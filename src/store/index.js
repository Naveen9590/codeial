import { createStore, applyMiddleware } from "redux";
import  thunk  from "redux-thunk";
import logger from "redux-logger";
import rootreducer from '../reducers/index';



export function configureStore(){
    
    const store=createStore(rootreducer,applyMiddleware(thunk,logger))
    return store
}




