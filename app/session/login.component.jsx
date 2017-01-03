import React, {Component} from 'react';
import {Row, Input,Button,Icon} from 'react-materialize';
import {browserHistory} from 'react-router'
import axios from 'axios';
import CookieStore from '../modules/cookie_store.js';


class Login extends Component {

    constructor(){
        super();
        this.state = {
            errors:""
        }
    }

    errors(){
        return <span className="color red">{this.state.errors}</span>
    }

    login(){

        let credentials = {email:this.refs.email.state.value, password:this.refs.password.state.value}
        axios.post(__BARATONA_API_URL__ + '/authenticate', credentials)
            .then((response) => {
                CookieStore.saveToken(response.data.auth_token);
                CookieStore.saveUser(response.data.user);


                console.log(CookieStore.getToken());
                browserHistory.push('/');
            })
            .catch((error) => {
                CookieStore.cleanToken();
                console.log(error);
                this.setState({
                    errors:"invalid Uername or Password!"
                })

            });
    }

    render() {
        return (
            <div className="center">
                <Row>
                    <h3>Login</h3>
                </Row>
                <Row>
                    {this.errors()}
                </Row>
                <Row>
                    <Input ref="email" type="email" label="Email" s={12} m={12} l={12}/>
                </Row>
                <Row>
                    <Input ref="password" type="password" label="password" s={12} m={12} l={12} />
                </Row>
                <Row>
                    <Button waves='light' onClick={this.login.bind(this)}>Login</Button>
                </Row>
            </div>
        );
    }
}

export default Login;
