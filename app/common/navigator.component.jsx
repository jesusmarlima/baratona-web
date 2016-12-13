import React, {Component} from 'react';
import {Navbar,NavItem} from 'react-materialize';
import {browserHistory} from "react-router";
import Auth from '../session/Auth.js'

class Navigator extends Component {

    logout(ev){
        ev.preventDefault();
        Auth.deauthenticateUser();
        browserHistory.push("/login")
    }

    render() {
        return (
            <div>
                <Navbar className='purple darken-4' brand='Baratona' right>
                    <NavItem href='/login'>Login</NavItem>
                    <NavItem href='#' onClick={this.logout.bind(this)}>Logout</NavItem>
                </Navbar>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Navigator