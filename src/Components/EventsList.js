import React, { Component } from 'react'
import Auth from './Auth';
import Event from './Event';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";

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
  
  logout() {
         localStorage.removeItem('userId');
         Auth.authenticated = false;
         this.props.history.push('/');
    }

  render() {
    return (
      <div>

      <MDBNavbar color=" teal accent-3" dark expand="md">
            <MDBNavbarBrand className=" banner">
              <strong className="white-text">EvieGO</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <MDBIcon icon="user" />
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropdown-default" right>
                      <MDBDropdownItem >My Events</MDBDropdownItem>
                      <MDBDropdownItem onClick={() => this.logout()}>Logout</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
 


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
