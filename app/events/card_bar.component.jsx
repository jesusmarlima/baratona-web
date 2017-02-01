import React from 'react'

class CardBar extends React.Component {
  render(){
    return(
        <div>
            <div className="left_side" >
              <img className="imageCard" src={this.props.bar.icon}/>
            </div>
            <div className="right_side">
              <p><span className="BOLD">{this.props.bar.name}</span></p>
              <p>{this.props.bar.formatted_address}</p>
            </div>
        </div>
    )
  }

}

export default CardBar
