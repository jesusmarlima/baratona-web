import React, {Component} from 'react';
import {Row, Input,Button,Icon} from 'react-materialize';
import {browserHistory} from 'react-router'
import axios from 'axios';


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

    register(){

        let credentials = {name:this.refs.name.state.value, email:this.refs.email.state.value, password:this.refs.password.state.value}
        axios.post(__BARATONA_API_URL__ + '/users', credentials)
            .then((response) => {
                console.log(response);

                browserHistory.push('/login');
            })
            .catch((error) => {
                console.log(error);
                this.setState({
                    errors:error
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
                    {this.errors()}
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
                    <Button waves='light' onClick={this.register.bind(this)}>Login</Button>
                </Row>
            </div>
        );
    }
}

export default Login;
