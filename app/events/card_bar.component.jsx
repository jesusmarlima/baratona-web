import React from 'react'

class CardBar extends React.Component {
  render(){


    var bar = {icon:"", formatted_address:"", name:""};

    if (this.props.bar.bar){
      bar = this.props.bar.bar
    }

    return(
        <div>
            <div className="left_side" >
              <img className="imageCard" src={bar.icon}/>
            </div>
            <div className="right_side">
              <p><span className="BOLD">{bar.name}</span></p>
              <p>{bar.formatted_address}</p>
            </div>
        </div>
    )
  }

}

export default CardBar
