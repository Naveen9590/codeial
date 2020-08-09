import {APIURL} from '../helpers/Urls';


export const User_Profile_Success='User_Profile_Success'
export const User_Profile_Failure='User_Profile_Failure'
export const Start_User_Profile_Fetch='Start_User_Profile_Fetch'



export function fetchProfile(userId){    //this is function
    return (dispatch)=>{
        dispatch(StartProfileFetch())
        const url=APIURL.fetchuserprofile(userId)
        console.log('xxxx', url);// is the url correct?1sec
        const bearer=localStorage.getItem('token');
        console.log('Bearer ', bearer);
        fetch(url,{headers:{
            'Content-Type':'application/x-www-form-urlencoded',
            'Authorization':`Bearer ${bearer}`//this is it..
        }}

        ).
        then(response=>response.json()).
        then(response=>{
            console.log('fetch user profile',response);
            // there 
            if(response.success){
            dispatch(userProfileSuccess(response.data.user))
                 return
             }
             dispatch(userProfileFailure(response.message))
        
        })
        
    }
}




export function StartProfileFetch(){
    return{
        type:Start_User_Profile_Fetch,
    }
}



export function userProfileSuccess(userprofile){
    return{
        type:User_Profile_Success,
        userprofile
    }
}


export function userProfileFailure(error){
    return{
        type:User_Profile_Failure,
        error
    }
}