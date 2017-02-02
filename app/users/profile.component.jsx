import React from 'react';
import axios from 'axios';
import CookieStore from '../modules/cookie_store.js';
import NewEvent from '../events/new_event.component.jsx';
import {browserHistory}  from 'react-router';
import LeftMenu from '../events/left_menu.component.jsx';
import EventDetail from '../events/event_detail.component.jsx';


class Profile extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      events:[],
      event:{}
    }
  }

  showNewEvent(e){
    browserHistory.push('/events');
  }

  componentDidMount(){

    let token = CookieStore.getToken()
    let credentials = { email: CookieStore.getUser().email }

    axios.defaults.baseURL = '__BARATONA_API_URL__' + '/events';
    axios.defaults.headers.common['Authorization'] = token;
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    axios.get(__BARATONA_API_URL__ + '/events', {params: credentials} )
        .then((response) => this.setState({events:response.data.events}))
        .catch((error) => {
          if (error.response){
            this.setState({errors: error.response.data})
          }
        })

  }

  eventClick(name){
    var event = this.state.events.find((e) => (e.name == name) )
    this.setState({
      event:event
    })
  }


  render(){

    const events = this.state.events

    return(
      <div>
        <LeftMenu onClick={this.eventClick.bind(this)} events={events}/>
        <EventDetail event={this.state.event}/>
      </div>
    );
  }
}

export default Profile;
