import {combineReducers} from 'redux';
import {post} from './postred';
import auth from './auth';
import {Profile} from './Profile'


export default combineReducers({
    post:post,
    auth,
    Profile,

})