import React from 'react';
import CookieStore from '../modules/cookie_store.js';
import NewEvent from '../events/new_event.component.jsx';
import {browserHistory}  from 'react-router';
import LeftMenu from '../events/left_menu.component.jsx';
import Container from '../maps/container.component.jsx';

class Profile extends React.Component{

  constructor(props){
    super(props);
  }

  showNewEvent(e){
    browserHistory.push('/events');
  }


  render(){
    return(
      <div>
        <LeftMenu />
        <div className="right_side">
            <div className="Row">
              <p>name: Jesusmar Birthday</p>
              <p>Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Date: 10/10/2010</p>
              <p>Location:</p>
              <div className="Row">
                <Container />
              </div>

            </div>
        </div>

      </div>
    );
  }
}

export default Profile;
