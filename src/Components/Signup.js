import React, { Component } from 'react'
import fire from './Firebase';
class Signup extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        username: '',
         email: '',
         password: ''
      }
    }
    signup() {
      const db = fire.firestore();
      // db.settings({
      //   timestampsInSnapshots: true
      // });
      const username = this.state.username;
      const email = this.state.email;
      const password = this.state.password;
      fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        db.collection('users').add({
          id: user.user.uid,
          username: username,
          email: user.user.email
        });  
        this.props.history.push('/login'); 
      })
      .catch((error) => {
        console.log('error')
      });

       
    }
    
  render() {
    return (
      <div>
                <input type="text" name="username" placeholder="Username"  value={ this.state.username } onChange={(username) => this.setState({username: username.target.value})} />
        <input type="email" name="email" placeholder="Email"  value={ this.state.email } onChange={(email) => this.setState({email: email.target.value})} />
        <input type="password" name="password" placeholder="Password"  value={ this.state.password } onChange={(password) => this.setState({password: password.target.value})} />
        <button onClick={() => this.signup()}>Signup</button>
        <button onClick={()=> this.props.history.push('/login')} >Login</button>
      </div>
    )
  }
}

export default Signup
