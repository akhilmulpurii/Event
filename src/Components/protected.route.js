import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Auth from './Auth';

const protectedRoute = ({component: Component, ...rest}) => {
  return (
<Route 
{...rest}
render = {
        (props) => {
            if(Auth.isLoggedIn() ) {
            return <Component {...props} />
        
    } else {
return <Redirect to="/" />
    }
    
}
}/>
  )
}

export default protectedRoute
