import React, { Component } from 'react'

export class UpdateEvent extends Component {
    // constructor() {
    //   super();
    //   // this.value = JSON.parse(this.props.match.params.id);
    // }
  render() {
    const value = JSON.parse(this.props.match.params.id);
    return (
      <div>
        <h1>Update Event</h1>
        {/* <p>{console.log(this.props.match.params.id)}</p> */}
        <form>
        <input type="text" value={value.eventName} />
        <input type="text" value={value.desc} />
        <input type="text" value={value.duration} />
        <input type="text" value={value.location} />
        <input type="text" value={value.maxParticipants} />
        <input type="text" value={value.fees} />
        {/* <p>{this.value.eventName}</p> */}
        </form>
      </div>
    )
  }
}

export default UpdateEvent
