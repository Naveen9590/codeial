import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions/authAction';
class Signup extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            email:'',
            password:'',
            confirmPassword:'',
            equal:false

        }
    }

    handleName=(e)=>{
        this.setState({
            name:e.target.value
        })

    }

    handleEmail=(e)=>{
        this.setState({
            email:e.target.value
        })

    }

    handlePassword=(e)=>{
        this.setState({
            password:e.target.value

        })
    }

    handleConfirmPassword=(e)=>{
        this.setState({
            confirmPassword:e.target.value

        })
    }
    handleSubmit=(e)=>{
        const{email,password,confirmPassword,name}=this.state
        e.preventDefault()
        if(email&&password&&confirmPassword&&name){
        this.props.dispatch(signup(this.state.email,this.state.password,this.state.confirmPassword,this.state.name))
    }
    }
    isEqual=(e)=>{
        if(this.state.password===this.state.confirmPassword){
            this.handleSubmit(e)
            return
        }
        this.setState({
            equal:true
        })
        

        
    }

    render(){
        console.log(this.state)
        return(
            <form className="login-form">
            <span className='login-signup-header'>Signup</span>
            {this.state.equal&&<div>pass and con pass should match</div>}
            
            <div className="field">
                <input type="text" placeholder="enter your Name" onChange={this.handleName}  required/>

            </div>
            <div className="field">
                <input type="email" placeholder="enter email" onChange={this.handleEmail} required/>

            </div>
            <div className="field">
                <input type="password" placeholder="Password" onChange={this.handlePassword} required/>

            </div>
            <div className="field">
                <input type="password" placeholder="Confirm Password" onChange={this.handleConfirmPassword}  required/>

            </div>
            
            <div className="field">
              <button onClick={this.isEqual}>Signup</button>
            </div>    

        </form>

        )
    }
}



function mapStateToProps(state){
    return{
        authState:state.auth
    }

}
const ConnectedSignupComponent=connect(mapStateToProps)(Signup)
export default ConnectedSignupComponent;