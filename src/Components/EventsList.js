import React, { Component } from 'react'
import Event from './Event';
import NavBar from "./NavBar";

import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import '../App.css';

export class EventsList extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    return (
      <div>
        <NavBar />
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
      </div>
    )
  }
}

export default EventsList
