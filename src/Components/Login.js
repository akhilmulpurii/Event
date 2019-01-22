import React, { Component } from 'react'
import fire from './Firebase';
class Login extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        email: '',
        password: ''
      }
    }
    
    login() {  
      const { email, password } = this.state;
      fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        localStorage.setItem('userId', user.user.uid);
        console.log(user);
        this.props.history.push('/eventslist'); 
      })
      .catch((error) => {
        console.log('error')
      });

 
     }
  render() {
    return (
      <div>
        <input type="text" placeholder="Email"  value={ this.state.email } onChange={(email) => this.setState({email: email.target.value})} />
        <input type="password" placeholder="Password"  value={ this.state.password } onChange={(password) => this.setState({password: password.target.value})} />
        <button onClick={() => this.login()}>Login</button>
        <button onClick={()=> this.props.history.push('/signup')} >Signup</button>
      </div>
    )
  }
}

export default Login
