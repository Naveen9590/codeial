import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchProfile} from '../actions/UprofileActions'

class UserProfile extends Component {
  componentDidMount() {
    // console.log(this.props)
     const { match } = this.props;
    // console.log("mounting")
    console.log(match.params.userid)
    if (match.params.userid) {
      //console.log('dispatching profile action')
      // dispatch an action
      this.props.dispatch(fetchProfile(match.params.userid))
      console.log("done")
      
    }
  }
   

  render() {
    const {
      match: { params },
    } = this.props;
    console.log('this.props', this.props);

    return (
      <div className="settings">
        <div className="img-container">
          <img
            src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
            alt="user-dp"
          />
        </div>

        <div className="field">
          <div className="field-label">Name</div>
          <div className="field-value">{this.props.profileState.user.name}</div>
        </div>

        <div className="field">
          <div className="field-label">Email</div>
          <div className="field-value">{this.props.profileState.user.email}</div>
        </div>

        <div className="btn-grp">
          <button className="button save-btn">Add Friend</button>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state){
  console.log(state.Profile)
  return{
    profileState:state.Profile
  }
  

}
const connectedUserProfileComponent=connect(mapStateToProps)(UserProfile)

export default connectedUserProfileComponent;
