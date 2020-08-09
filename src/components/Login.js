import React from 'react';

import { connect } from 'react-redux';
import {login} from '../actions/authAction';
import {clearAuthState} from '../actions/authAction';
import {Redirect} from 'react-router-dom';


class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:''
        }
    }

    componentWillUnmount(){
        //console.log('clearing error')
        this.props.dispatch(clearAuthState())
    }

    handleEmail=(e)=>{
        this.setState({
            email:e.target.value,
        })
    }

    handlePassword=(e)=>{
        this.setState({
            password:e.target.value,
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const {email,password}=this.state
        if (email&&password){
        this.props.dispatch(login(email,password))
        }
    }
    
    render(){
        
        console.log(this.state.email,this.state.password)
        const {error,inProgress}=this.props.auth
        const {from}=this.props.location.state ||{from:{pathName:'/'}}
        if(this.props.auth.isLoggedIn){
           return  <Redirect  to={from} />
        }
    return(
        <form className="login-form">
            <span className='login-signup-header'>Log In</span>
            {error&& <div>{error}</div>}
            
            <div className="field">
                <input type="email" placeholder="enter email" onChange={this.handleEmail} required/>

            </div>
            <div className="field">
                <input type="password" placeholder="password" onChange={this.handlePassword} required/>

            </div>
            <div className="field">
           { console.log(inProgress),inProgress?
           
           
           <button  disabled={inProgress}>Logging In......</button>:
            <button onClick={this.handleSubmit} disabled={inProgress}>Log In</button>

            
            }
        </div>    

        </form>
    )
    }
}


function mapStateToProps(state){
    return{
        auth:state.auth
    }

}


const ConnectedLoginComponent=connect(mapStateToProps)(Login)

export default ConnectedLoginComponent;