import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import fire from './Firebase'
import {MDBContainer, MDBAlert} from 'mdbreact';

  class Register extends Component {
    SignupSchema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required('Required'),
      username: Yup.string()
        .min(6)
        .max(16)
        .required('Required'),
      password: Yup.string()
        .min(6)
        .max(16)
        .required('Required'),
    });
    
    signup = (email,username,password) => {
      const db = fire.firestore();
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
        return(
          <MDBContainer className="main">
            <div className="loginContainer">
            <div className="wrapper">
            <h1  className='text-center'>Register</h1>
              <Formik
                initialValues={{
                  email: '',
                  username: '',
                  password: ''
                }}
                validationSchema={this.SignupSchema}
                onSubmit={(values,action) => {
                  this.login(values.email,values.username,values.password,values);
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div class="input-group pt-4 flex-nowrap">
                      <Field className="form-control" placeholder="Email" name="email" type="email" />
                    </div>
                    <MDBAlert color="danger">{ errors.email && touched.email ? (
                      <div>{errors.email}</div>
                    ) : null}</MDBAlert>
                    <div class="input-group pt-4 flex-nowrap">
                      <Field className="form-control" placeholder="Username" name="username" type="text" />
                    </div>
                    <MDBAlert color="danger">{ errors.username && touched.username ? (
                      <div>{errors.username}</div>
                    ) : null}</MDBAlert>
                    <div class="input-group pt-4 pb-1 flex-nowrap">
                      <Field className="form-control" placeholder="Password" name="password" type="password" />
                    </div>
                    <MDBAlert color="danger">{errors.password && touched.password ? (
                      <div>{errors.password}</div>
                    ) : null}</MDBAlert>
                    <div class="d-flex justify-content-around pt-3">
                      <button className="btn btn-info" type="submit">Sign Up</button>
                      <a className="btn btn-primary" href="/">Login</a>
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

  export default Register