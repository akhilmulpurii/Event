import React, { Component } from 'react'
import Modal from 'react-modal';
import {Link} from 'react-router-dom';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

Modal.setAppElement('#root');
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
    // const {eveName, ...rest};
    this.state = {
        modalIsOpen: false
      };
   
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }
  
  closeModal() {
    this.setState({modalIsOpen: false});
  } 
  render() {
    return (
      <div>
        <li><a onClick={this.openModal}>{this.event.eventName}</a></li> 
        <Link to={`/updateevent/${JSON.stringify(this.event)}`}>Edit</Link>
        <Modal
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
        </Modal>
      </div>
    )
  }
}

export default Event
