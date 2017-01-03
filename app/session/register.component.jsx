import React, {Component} from 'react';
import {Row, Input,Button,Icon} from 'react-materialize';
import {browserHistory} from 'react-router'
import axios from 'axios';
import Errors from '../common/errors.component.jsx';



class Login extends Component {

    constructor(){
        super();
        this.state = {
            errors:{}
        }
    }



    register(){

        let credentials = {name:this.refs.name.state.value,
                          email:this.refs.email.state.value,
                          password:this.refs.password.state.value,
                          password_confirmation: this.refs.password_confirmation.state.value
                        }
        axios.post(__BARATONA_API_URL__ + '/users', credentials)
            .then((response) => {
                browserHistory.push('/login');
            })
            .catch((error) => {
                this.setState({
                    errors: error.response.data
                })

            });
    }

    render() {
        return (
            <div className="center">
                <Row>
                    <h3>Register</h3>
                </Row>
                <Row>
                    <Errors data={this.state.errors}/>
                </Row>
                <Row>
                    <Input ref="name" type="text" label="Name" s={12} m={12} l={12}/>
                </Row>
                <Row>
                    <Input ref="email" type="email" label="Email" s={12} m={12} l={12}/>
                </Row>
                <Row>
                    <Input ref="password" type="password" label="password" s={12} m={12} l={12} />
                </Row>
                <Row>
                    <Input ref="password_confirmation" type="password" label="password_confirmation" s={12} m={12} l={12} />
                </Row>
                <Row>
                    <Button waves='light' onClick={this.register.bind(this)}>Login</Button>
                </Row>
            </div>
        );
    }
}

export default Login;
