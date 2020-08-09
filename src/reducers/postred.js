//import { combineReducers } from "redux";
import {Update_Posts} from '../actions/fetchPosts';




export  function post(state=[],action){
    switch(action.type){
        case Update_Posts:
            return action.post
        default:
            return state    

    }
    

}

// const initialState={
//     post:[]
// }
