import React, { Component } from 'react'
import Auth from './Auth';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from 'mdbreact';
import { Link } from 'react-router-dom';
  
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import '../App.css';

class NavBar extends Component {   
  logout() {
    localStorage.removeItem('userId');
    Auth.authenticated = false;
    window.location.reload();
}
    render() {
        return(
            <MDBNavbar color=" teal accent-3" dark expand="md">
                <MDBNavbarBrand className=" banner">
                    <Link to="/eventslist" className="white-text">EvieGO</Link>
                </MDBNavbarBrand>
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
            </MDBNavbar>
        )
    }
}

export default NavBar   