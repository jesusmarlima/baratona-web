import React from 'react'
import CookieStore from '../modules/cookie_store.js';


class LeftMenu extends React.Component{
  render(){
    return(
        <div className="left_side">
          <h3>
            {CookieStore.getUser().name}
          </h3>
          <a className="waves-effect waves-light btn" href="/events">New Event</a>
          <div className="myEventsList">
             <ul>
               <li>
                 <span><a href="#" >Jesusmar's Birthday</a></span>
               </li>
               <li>
                 <span><a href="#" >Vanessa's Birthday</a></span>
               </li>
               <li>
                 <span><a href="#" >Claudio's Wedding</a></span>
               </li>
               <li>
                 <span><a href="#" >Silvia's Party</a></span>
               </li>
            </ul>
          </div>
        </div>
    )
  }
}


export default LeftMenu
