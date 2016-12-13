import React, {Component} from 'react';
import {Row, Input,Button,Icon} from 'react-materialize';
import {browserHistory} from 'react-router'
import axios from 'axios';
import Auth from './Auth.js';

class Login extends Component {

    constructor(){
        super();
    }

    login(){

        let credentials = {email:this.refs.email.state.value, password:this.refs.pass.state.value}
        axios.post('http://localhost:9393/authenticate', credentials)
            .then(function (response) {
                debugger
                Auth.authenticateUser(response.data.auth_token);
                console.log(Auth.getToken());
                browserHistory.push('/');
            })
            .catch(function (error) {
                Auth.deauthenticateUser();
                console.log(error);
            });
    }

    render() {
        return (
            <div className="center">
                <Row>
                    <h3>Login</h3>
                </Row>
                <Row>
                    <Input ref="email" type="email" label="Email" s={12} m={12} l={12}/>
                </Row>
                <Row>
                    <Input ref="pass" type="password" label="password" s={12} m={12} l={12} />
                </Row>
                <Row>
                    <Button waves='light' onClick={this.login.bind(this)}>Login</Button>
                </Row>
            </div>
        );
    }
}

export default Login;