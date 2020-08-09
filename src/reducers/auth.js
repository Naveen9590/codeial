import {Login_Start,Login_Sucess,Login_Fail,
     Signup_Start, Signup_Success, Signup_Fail,
      AUTHENTICATE_USER, LOG_OUT,CLEAR_AUTH_STATE, Edit_User_Succesful, Edit_User_Failure} from '../actions/authAction'


const initialState={
    user:{},
    isLoggedIn:false,
    inProgress:false,
    error:null
}


export default function auth(state=initialState,action){
    switch(action.type){
        case CLEAR_AUTH_STATE:
            return{
                ...state,error:null
            }
        case Login_Start:
        case Signup_Start:    
            return{
                ...state,inProgress:true
            }
        case Login_Sucess:
        case Signup_Success:    
            return{
                ...state,user:action.user,isLoggedIn:true,error:null,inProgress:false
                }
        case Login_Fail:
        case Signup_Fail:    
            return{
                ...state,error:action.error,inProgress:false
                
                
                }
        case AUTHENTICATE_USER:
            return{
                ...state,user:action.user,isLoggedIn:true
            }
        case LOG_OUT:
            return{
                ...state,user:{},isLoggedIn:false
            } 
        case Edit_User_Succesful:
            return{
                ...state,user:action.user,
                error:false
            }
        case Edit_User_Failure:
            return{
                ...state,
                error:action.error
            }                   
        default:
            return state        
                


    }

}