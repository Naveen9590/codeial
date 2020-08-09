import React from 'react';
import { connect } from 'react-redux';
import { edit } from '../actions/authAction';

class Settings extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:props.authState.user.name,
            password:'',
            confirmPassword:'',
            editMode:false,

        }
    }
    handleChange=(fieldname,value)=>{
        this.setState({
            [fieldname]:value
        })
    }

    handleSave=()=>{
        const {name,password,confirmPassword}=this.state
        const user=this.props.authState
        this.props.dispatch(edit(name,password,confirmPassword,user.user._id))
    }

    render(){
        const user=this.props.authState
        console.log(user)
        console.log(user.user._id)
        console.log(localStorage.getItem('token'))


        return(<div className="settings">
            <div className='img-container'>
                <img
                src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                alt="user-dp"
                id="user-dp"
              />
            </div>


               <div className="field">
                   <div className="field-label">
                     email
                   </div>
                   <div className='field-value'>
                       {this.props.authState.user.email}

                   </div>

               </div>
               <div className="field">
                   <div className="field-label">
                     Name
                   </div>
                   {this.state.editMode?
                   (<input type="text" onChange={(e)=>this.handleChange('name',e.target.value)} value={this.state.name}/>):
                   (<div className='field-value'>
                       {this.props.authState.user.name}

                   </div>)}

               </div>

               {this.state.editMode&&(
                   <div className="field"> 

                   <div className="field-label">
                        New Password
                   </div>
                   <input type="password" onChange={(e)=>this.handleChange('password',e.target.value)} value={this.state.password}/>

                   </div>
               )}

                {this.state.editMode&&(
                   <div className="field"> 

                   <div className="field-label">
                        Confirm Password
                   </div>
                   <input type="password" onChange={(e)=>this.handleChange('confirmPassword',e.target.value)} value={this.state.confirmPassword}/>

                   </div>
               )}
                

                
                <div className="btn-grp">
                    {this.state.editMode?
                    <button className="button save-btn" onClick={this.handleSave}>Save</button>:
                    <button className="button edit-btn" onClick={()=>{this.handleChange('editMode',true)}}>Edit profile</button>

                    }
                    {this.state.editMode&&
                    <div className="go-back" onClick={()=>{this.handleChange('editMode',false)}}>Go Back </div>
                    
                    }

                </div>


            

            </div>)




    }



}

function mapStateToProps(state){
    return{
        authState:state.auth,
    }
}

const ConnectedSettings=connect(mapStateToProps)(Settings)
export default ConnectedSettings;