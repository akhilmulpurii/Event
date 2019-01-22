import React, { Component } from 'react'
import Auth from './Auth';
class Login extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        username: '',
        password: ''
      }
    }
    
    login() {

const retrievedUserAsString = localStorage.getItem('userObj');
const retrievedUser = JSON.parse(retrievedUserAsString);   
if (!retrievedUser){
  alert('Error');
} else if(this.state.username === retrievedUser.username && this.state.password === retrievedUser.password) {
  Auth.authenticated = true;
  this.props.history.push('/eventslist');

}    
     }
  render() {
    return (
      <div>
        <input type="text" placeholder="Username"  value={ this.state.username } onChange={(username) => this.setState({username: username.target.value})} />
        <input type="password" placeholder="Password"  value={ this.state.password } onChange={(password) => this.setState({password: password.target.value})} />
        <button onClick={() => this.login()}>Login</button>
        <button onClick={()=> this.props.history.push('/signup')} >Signup</button>
      </div>
    )
  }
}

export default Login
