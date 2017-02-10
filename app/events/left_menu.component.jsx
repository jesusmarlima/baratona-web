import React from 'react'
import CookieStore from '../modules/cookie_store.js';
import CardUser from '../users/card_user.component.jsx';


class LeftMenu extends React.Component{


  constructor(props){
    super(props);
  }

  handleEventClick(e,name){
      e.preventDefault()
      this.props.onClick(name)
  }


  render(){
    const events = this.props.events

    return(
      <div className="col s12 m2 l2">
          <CardUser user={CookieStore.getUser()}/>
          <div className="myEventsList">
             <ul className="collection z-depth-1">
               <li className="collection-item dismissable"><div><h5 className="pink-text text-darken-0">{"Events"}</h5></div></li>
               {
                 events.map((event,i) => <li key={i} className="collection-item dismissable"><div>{event.name}<a onClick={(e) => this.handleEventClick(e,event.name)} href="#!" className="secondary-content"><i className="material-icons">send</i></a></div></li> )
               }
            </ul>
          </div>
        </div>
    )
  }
}


export default LeftMenu
