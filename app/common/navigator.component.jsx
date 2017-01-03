import React, {Component} from 'react';
import {Navbar,NavItem} from 'react-materialize';
import {browserHistory} from "react-router";
import CookieStore from '../modules/cookie_store.js'

class Navigator extends Component {

    logout(ev){
        ev.preventDefault();
        CookieStore.cleanToken();
        browserHistory.push("/login")
    }

    render() {
        return (
            <div>
                <Navbar className='purple darken-4' brand='Baratona' right>
                    <NavItem href='/login'>Login</NavItem>
                    <NavItem href='/register'>Register</NavItem>
                    <NavItem href='/events/new'>New Event</NavItem>
                    <NavItem href='#' onClick={this.logout.bind(this)}>Logout</NavItem>
                </Navbar>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Navigator