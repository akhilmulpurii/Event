import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

export class Event extends Component {
  constructor(props){
      super();
    this.event = {
      eventName: props.eventName,
      desc: props.desc,
      duration: props.duration,
      location: props.location,
      fees: props.fees,
      tags: props.tags,
      maxParticipants: props.maxParticipants,  
    }
    this.state = {
        modal: false
      };
  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    return (
      <div>
        <li><a onClick={this.toggle}>{this.event.eventName}</a></li> 
        
        <MDBContainer>
          <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
            <MDBModalHeader toggle={this.toggle}>{this.event.eventName}</MDBModalHeader>
            <MDBModalBody>
              <p>Description: {this.event.desc}</p>
              <p>Duration: {this.event.duration}</p>
              <p>Location: {this.event.location}</p>
              <p>Fees: {this.event.fees}</p>
              <p>Max Members: {this.event.maxParticipants}</p>
            </MDBModalBody>
            <MDBModalFooter>
               <Link to={`/updateevent/${JSON.stringify(this.event)}`}><MDBBtn color="teal accent-3">Edit</MDBBtn></Link>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
        
        
        
        {/* <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2 ref={title => this.title = title}>{this.event.eventName}</h2>
          <p>Description: {this.event.desc}</p>
          <p>Duration: {this.event.duration}</p>
          <p>Location: {this.event.location}</p>
          <p>Fees: {this.event.fees}</p>
          <p>Max Members: {this.event.maxParticipants}</p>
          <button onClick={this.closeModal}>Close</button>
        </Modal> */}
      </div>
    )
  }
}

export default Event
