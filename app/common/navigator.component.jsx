import React, {Component} from 'react';
import {Navbar,NavItem} from 'react-materialize';

class Navigator extends Component {
    render() {
        return (
            <div>
                <Navbar brand='Baratona' right>
                    <NavItem href='/login'>Login</NavItem>
                    <NavItem href='components.html'>Components</NavItem>
                </Navbar>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Navigator