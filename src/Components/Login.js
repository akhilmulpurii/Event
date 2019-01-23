import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import fire from './Firebase'
import {MDBContainer,MDBAlert} from 'mdbreact';

  class Login extends Component {
    SignupSchema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required('Required'),
      password: Yup.string()
        .min(6)
        .max(16)
        .required('Required'),
    });
    
    login = (email,password) => {
        fire
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then((user) => {
            this.props.history.push('/eventslist'); 
    
            localStorage.setItem('userId', user.user.uid);
            console.log(user);
          })
          .catch((error) => {
            console.log(error)
          });
      }
      render() {
        return(
          <MDBContainer className="main">
            <div className="loginContainer">
              <div className="wrapper">
              <h1 className='text-center'>Signin</h1>      
              <Formik
                initialValues={{
                  email: '',
                  password: ''
                }}
                validationSchema={this.SignupSchema}
                onSubmit={(values,action) => {
                  this.login(values.email,values.password);
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    
                    <div class="input-group pt-4 flex-nowrap">
                      <Field className="form-control" placeholder="Username" name="email" type="email" />
                    </div>
                    {errors.email && touched.email ? (
                      <MDBAlert color="danger"><div>{errors.email}</div></MDBAlert>
                    ) : null}
                    <div class="input-group pt-4 flex-nowrap">
                      <Field className="form-control" placeholder="Password" name="password" type="password" />
                    </div>             
                   {errors.password && touched.password ? (
                       <MDBAlert color="danger"> <div>{errors.password}</div></MDBAlert>
                    ) : null}
                    <div class="d-flex pt-3 justify-content-around">
                      <button className="btn btn-info" type="submit" >Login</button>
                      <a className="btn btn-primary" href="/signup">Sign Up</a>
                    </div>
                  </Form>
                )}
              </Formik>   
              </div>
          </div>
        </MDBContainer>
        );
      }
  }

  export default Login