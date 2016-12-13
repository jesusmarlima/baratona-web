import React, {Component} from 'react';
import Auth from '../session/Auth.js'

class Home extends Component {

    render() {
        return (
            <h1>{Auth.getToken()}</h1>
        );
    }
}

export default Home;