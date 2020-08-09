import {Start_User_Profile_Fetch,User_Profile_Success,User_Profile_Failure} from '../actions/UprofileActions';

const initialState={
    user:{},
    success:null,
    error:null,
    inProgress:false
}



export function Profile(state=initialState,action){
    switch(action.type){
        case Start_User_Profile_Fetch:
            return{
                ...state,inProgress:true
            }
        case User_Profile_Success:
            return {
                ...state,
                success:true,
                user:action.userprofile,
                inProgress:false
            }  
        case User_Profile_Failure:
            return{
                ...state,error:action.error,
                inProgress:false
            }
        default:
            return{
                ...state
            }          


    }
   
}
