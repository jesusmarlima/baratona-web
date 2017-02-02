import React from 'react';

class EventDetail extends React.Component{
  render(){

    const event = this.props.event

    return(
      <div className="right_side">
          <div className="Row">
            <p>Name:{event.name}</p>
            <p>Description: {event.description}</p>
            <p>Location:</p>
          </div>
      </div>
    )
  }
}

export default EventDetail
