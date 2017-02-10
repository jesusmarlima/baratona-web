import React from 'react';
import SimpleContainer from '../maps/simple_container.component.jsx'

class EventDetail extends React.Component{


  render(){
    const event = this.props.event

    return(
      <div className="col s12 m10 l10">
        <ul className="collection z-depth-1">
          <li className="collection-item dismissable">
            <div className="row">
              <div><span className="pink-text text-darken-0 col s12 m2 l2 left">Name:</span></div>
              <div><span className="col s12 m10 s10">{event.name}</span></div>
            </div>
          </li>
          <li className="collection-item dismissable">
            <div className="row">
              <div><span className="pink-text text-darken-0 col s12 m2 l2 left">Description:</span></div>
              <div><span className="col s12 m10 s10">{event.description}</span></div>
            </div>
          </li>
          <li className="collection-item dismissable">
            <div className="row">
              <div><span className="pink-text text-darken-0 col s12 m2 l2 left">Address:</span></div>
              <div><span className="col s12 m10 s10">{ event.base_location ? JSON.parse(event.base_location).formatted_address : ""}</span></div>
            </div>
          </li>
        </ul>
        <SimpleContainer onClick={this.handleClick} bar={event.base_location ? JSON.parse(event.base_location) : { name:"", geometry:{ location:{ lat:0,lng:0} } } }></SimpleContainer>
    </div>
    )
  }
}

export default EventDetail
