import React, { Component } from 'react'
import Auth from './Auth';
import Event from './Event';

export class EventsList extends Component {
  
  logout() {
         localStorage.removeItem('userId');
         Auth.authenticated = false;
         this.props.history.push('/');
    }

  render() {
    return (
      <div>
        <h1>Events List</h1>
        <Event 
          eventName="Saraf's 1st Birthday" 
          desc="He is very happy that he is born so please attend this party" 
          duration="2 hrs" 
          location="Teynampet" 
          fees="Free" 
          tags="" 
          maxParticipants="10 Members" 
        />
        <Event 
          eventName="Saraf's 1st Marriage" 
          desc="He is very happy that he finally is getting a girl" 
          duration="5hrs" 
          location="T Nagar" 
          fees="100 Rs" 
          tags="" 
          maxParticipants="300 Members" 
        />
        <Event 
          eventName="Saraf's 1st Divorce" 
          desc="He is very happy that he got rid of the irritating girl" 
          duration="1 hr" 
          location="Marina Beach" 
          fees="1000 Rs" 
          tags="" 
          maxParticipants="2 Members" 
        />
        
        <button onClick={() => this.logout()}>Logout</button>
      </div>
    )
  }
}

export default EventsList
