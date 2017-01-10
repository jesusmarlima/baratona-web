import React from 'react';
import CookieStore from '../modules/cookie_store.js';
import NewEvent from '../events/new_event.component.jsx';
import {browserHistory}  from 'react-router';

class Profile extends React.Component{

  constructor(props){
    super(props);
  }

  showNewEvent(e){
    browserHistory.push('/events');
  }


  render(){
    return(
      <div className="Row">
        <div>
          <h3>
            {CookieStore.getUser().name}
          </h3>
        </div>
        <div>
          <a className="waves-effect waves-light btn" href="/events">New Event</a>
        </div>
      </div>
    );
  }
}

export default Profile;
