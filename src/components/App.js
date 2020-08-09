import React from 'react';
import { connect } from 'react-redux';
import {fetchPosts} from '../actions/fetchPosts';
import {authenticateUser} from '../actions/authAction'
import PostList from './PostList';
import propTypes from 'prop-types';
import Nav from './Nav';
import {BrowserRouter as Router,Link,Route,Switch, Redirect} from 'react-router-dom';
import Home from './Home';
import Page404 from './Page404';
import Login from './Login';
import Signup from './Signup';
import * as hi from 'jwt-decode';
import auth from '../reducers/auth';
import Settings from './Settings';
import UserProfile from './UserProfile';

// const home=()=>{
//   return(
//     <div>
//       Home
//     </div>
//   )
// }
// const signup=(props)=>{
//   console.log(props)
//   return(
//     <div>
      
//       Signup
//     </div>
//   )
// }
// const login=()=>{
//   return(
//     <div>
//       Login
//     </div>
//   )
// }
// const settings=()=>{
//   return <div>
//     settings
//   </div>
// }
const PrivateRoute=(Prprops)=>{

   return <Route path={Prprops.path} render={(props)=>{
     return Prprops.isLoggedIn?<Prprops.component {...props}/>: <Redirect to={{
       pathname:'/login',
       state:{
       from:props.location
       }
     }}/>
     }}/>
}

class App extends React.Component {

  componentDidMount(){
    this.props.dispatch(fetchPosts())
    const token=localStorage.getItem('token')

    if(token){
      const user=hi(token)

      console.log('user',user)

      this.props.dispatch(authenticateUser({
        name: user.name,
        email: user.email,
        _id: user._id
      }))

    }
  }
  
  
  
  render(){
    console.log(this.props.posts);
    console.log(this.props)
  return (
    <Router>
    <div className="App">
      {/* <Link to='/'>home</Link><br></br>
      <Link to='/signup'>signup</Link><br></br>
      <Link to='/login'>Login</Link> */}
      <Nav/>  
     
      <Switch>
      <Route exact path='/' render={(props)=>{
        return <Home posts={this.props.posts} {...props}/>
      }}/>
      <Route exact path='/signup' component={Signup}/>
      <Route exact path='/login' component={Login}/>
      <PrivateRoute exact path='/settings' component={Settings} isLoggedIn={this.props.auth.isLoggedIn}/>
      <PrivateRoute exact path='/users/:userid' component={UserProfile} isLoggedIn={this.props.auth.isLoggedIn}/>
      <Route  component={Page404} />
      </Switch>
    </div>
    </Router>
  );
}
}

//export default App;
function mapStateToProps(state){
  return {
    posts:state.post,
    auth:state.auth
  }

}

const ConnectedAppComponent=connect(mapStateToProps)(App)

App.propTypes={
  posts:propTypes.array.isRequired
}

export default ConnectedAppComponent;