import React, { Component } from 'react'

class Signup extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         password: ''
      }
    }
    signup() {

       const userObj = {
             username : this.state.username,
             password : this.state.password,
        };
        if (this.state.username === '' && this.state.password === '') {
          alert('error');
        } else {
          localStorage.setItem('userObj', JSON.stringify(userObj));
          this.props.history.push('/login');
        }

       
    }
    
  render() {
    return (
      <div>
        <input type="text" placeholder="Username"  value={ this.state.username } onChange={(username) => this.setState({username: username.target.value})} />
        <input type="password" placeholder="Password"  value={ this.state.password } onChange={(password) => this.setState({password: password.target.value})} />
        <button onClick={() => this.signup()}>Signup</button>
        <button onClick={()=> this.props.history.push('/login')} >Login</button>
      </div>
    )
  }
}

export default Signup
