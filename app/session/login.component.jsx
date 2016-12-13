import React, {Component} from 'react';
import {Row, Input,Button,Icon} from 'react-materialize';

class Login extends Component {
    render() {
        return (
            <div className="center">
                <Row>
                    <h3>Login</h3>
                </Row>
                <Row>
                    <Input type="email" label="Email" s={12} m={12} l={12}/>
                </Row>
                <Row>
                    <Input type="password" label="password" s={12} m={12} l={12} />
                </Row>
                <Row>
                    <Button waves='light'>Login</Button>
                </Row>
            </div>
        );
    }
}

export default Login;