import React, {Component} from 'react';

class Errors extends Component {

    constructor(){
      super();
    }

    errors(){
       let data = this.props.data
       if (data.hasOwnProperty("errors")){
         return data.errors.map((error,i)=> <p><span className="color red">{error}</span></p> )
       } else if (data.hasOwnProperty("error")){
         return data.error.user_authentication.map((error,i)=> <p><span className="color red">{error}</span></p> )
       }
    }

    render() {
          return(
            <div>
              {
                this.errors()
              }
            </div>
        );
    }
}

export default Errors;
