import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import EventList from './Components/EventsList';
import CreateEvent from './Components/CreateEvent';
import UpdateEvent from './Components/UpdateEvent';
import Error from './Components/Error';
import ProtectedRoute from './Components/protected.route';
import Event from './Components/Event';
import './App.css';

class App extends Component {
  
  render() {
    return (
<BrowserRouter>
<Switch>
<Route path='/' component={Login} exact />
<Route path='/login' component={Login} />
<Route path='/signup' component={Signup} />
<ProtectedRoute path='/eventslist' component={EventList} />
<ProtectedRoute path='/createevent' component={CreateEvent} />
<ProtectedRoute path='/updateevent/:id' component={UpdateEvent} />
<ProtectedRoute path='/event' component={Event} />
<Route component={Error} />
</Switch>
</BrowserRouter>
    );
  }
}

export default App;
