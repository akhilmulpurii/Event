import React, { Component } from 'react'
import fire from './Firebase';
import {MDBContainer} from 'mdbreact';

import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import '../App.css';

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
      <MDBContainer fluid>
        <div className="wrapper">
          <div>
            <h2 className="pb-2">Sign In</h2>
          </div>
          <div className="form-group ">
            <input 
              type="text"
              placeholder="Email"  
              value={ this.state.email } 
              onChange={(email) => this.setState({email: email.target.value})} 
              className="form-control"
              id="formGroupExampleInput"
            />
          </div>
          <div className="form-group ">
            <input 
              type="password" 
              placeholder="Password"  
              value={ this.state.password } 
              onChange={(password) => this.setState({password: password.target.value})} 
              className="form-control"
              id="formGroupExampleInput"
              />
          </div>
          <div  className="commonBTN" >
          <button className="btn btn-info" onClick={() => this.login()}>Login</button>
          </div>
          <div className="commonBTN">
            <button  className="btn btn-info" onClick={()=> this.props.history.push('/signup')} >Signup</button>
          </div>
        </div>  
      </MDBContainer>
    )
  }
}

export default Login
