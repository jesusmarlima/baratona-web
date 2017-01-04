import React, {Component} from 'react';
import {Navbar,NavItem} from 'react-materialize';
import {browserHistory} from "react-router";
import CookieStore from '../modules/cookie_store.js'

class Navigator extends Component {

    constructor(props){
      super(props)
      this.state = {
        user: ""
      }
    }

    updateState(){
      var user = CookieStore.getUser()
      if (user){
        this.setState({
          user:user.name
        })
      }

    }


    componentWillMount(nextProps, nextState){
      this.updateState()
    }


    componentWillUpdate(nextProps, nextState){
      this.updateState()
    }

    render() {
        return (
            <div>
                 <Navbar className='purple darken-4' brand='Baratona' right>
                     <NavItem href='/login'>Login</NavItem>
                     <NavItem href='/register'>Register</NavItem>
                     <NavItem>{this.state.user}</NavItem>
                 </Navbar>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Navigator;
