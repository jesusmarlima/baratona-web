import React from 'react'
import CookieStore from '../modules/cookie_store.js';


class LeftMenu extends React.Component{


  constructor(props){
    super(props);
  }

  handleEventClick(e,name){
      this.props.onClick(name)
  }


  render(){
    const events = this.props.events

    return(
        <div className="left_side">
          <h3>
            {CookieStore.getUser().name}
          </h3>
          <a className="waves-effect waves-light btn" href="/events">New Event</a>
          <div className="myEventsList">
             <ul>
               {
                 events.map((event,i) =>  <li key={i}><span><a ref={event.name} onClick={(e) => this.handleEventClick(e,event.name)}>{event.name}</a></span></li> )
               }
            </ul>
          </div>
        </div>
    )
  }
}


export default LeftMenu
