import React from 'react'


class CardUser extends React.Component {
  render(){

    return(
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src="images/sample-1.jpg"/>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{this.props.user.name}<i className="material-icons right">more_vert</i></span>
          <p><a href="/events">New Event</a></p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">More Info<i className="material-icons right">close</i></span>
          <p>Name: {this.props.user.name}</p>
          <p>email: {this.props.user.email}</p>
        </div>
      </div>
    )
  }
}

export default CardUser
