import React, {Component} from 'react';
import {Row, Input,Button,Icon} from 'react-materialize';

class Success extends Component{

  constructor(){
    super();
  }


  render(){
    return(
      <div className="center">
        <Row>
          <h3> {this.props.params.message} </h3>
        </Row>
      </div>
    );
  }

}

export default Success;
