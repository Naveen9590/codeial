import { APIURL } from "../helpers/Urls"

import {getFormBody} from '../helpers/utils'

//edituser
export const Edit_User_Succesful="Edit_User_Succesful"
export const Edit_User_Failure="Edit_User_Failure"

//login
export const Login_Start='Login_Start'
export const Login_Sucess='Login_Sucess'
export const Login_Fail='Login_Fail'

//signup

export const Signup_Start='Signup_Start'
export const Signup_Success='Signup_Success'
export const Signup_Fail='Signup_Fail'

//persisting user
export const AUTHENTICATE_USER='AUTHENTICATE_USER'
export const LOG_OUT='LOG_OUT'

//clearing error message
export const CLEAR_AUTH_STATE='CLEAR_AUTH_STATE'


export function startLogin(){
    return{
        type:Login_Start,
    }
}

export function loginfailed(errormessage){
    return{
        type:Login_Fail,
        error:errormessage
    }
}

export function loginsuccess(user){
    return{
        type:Login_Sucess,
        user:user
        
    }
}

export function login(email,password){
    return (dispatch)=>{
        dispatch(startLogin)
        console.log(getFormBody({email,password}))
        fetch(APIURL.login(),{
            method:'POST',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded',
            },
            body:getFormBody({email,password}),
        })
        .then((response)=>response.json())
        .then((response)=>{
            console.log(response)

        if(response.success){
            
            localStorage.setItem('token',response.data.token)///once the user is logged in here we are storing it
            dispatch(loginsuccess(response.data.user))
            return;
        }
        dispatch(loginfailed(response.message))
        
        }
        )
        

    }
}

export function signup(email,password,confirmpassword,name){
    const url=APIURL.signup();
    return(dispatch)=>{
        dispatch(signupstart)

        
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded',
            },
            body:getFormBody({
                name,
                email,
                password,
                confirm_password:confirmpassword

            })
        })
        .then(response=>response.json())
        .then(response=>{
            if (response.success){
                dispatch(signupSuccess(response.data.user))
                return;
            }
            dispatch(signupfail(response.message))
        })

    }
}


export function signupstart(){
    return{
        type:Signup_Start
    }
}

export function signupfail(error){
    return{
        type:Signup_Fail,
        error
    }
}

export function signupSuccess(user){
    return{
        type:Signup_Success,
        user:user
    }
}

export function authenticateUser(user){
    return{
        type:AUTHENTICATE_USER,
        user,
    }

}

export function logout(){
    return{
        type:LOG_OUT
    }
}
 export function clearAuthState(){
     return{
         type:CLEAR_AUTH_STATE
     }
 }


 export function editUserSuccess(user){
    return{
        type:Edit_User_Succesful,
        user
    }
}

export function editUserFailure(error){
    return{
        type:Edit_User_Failure,
        error
    }
}

export function edit(name,password,confirmpassword,userid){
    const url=APIURL.editProfile();
    return (dispatch)=>{
        
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded',
                'Authorization':`Bearer ${localStorage.getItem('token')}`
            },
            body:getFormBody({
                name,
                
                password,
                confirm_password:confirmpassword,
                id:userid
                
            }),
        }).
        then(response=>response.json()).
        then(response=>{
            console.log("editprofile",response)
            if(response.success){
                
                dispatch(editUserSuccess(response.data.user))

                if(response.data.token){
                    localStorage.setItem('token',response.data.token)
                }
                return    
                
            }
            

            dispatch(editUserFailure(response.message))
        })
    }
}