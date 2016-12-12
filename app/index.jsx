import React, {Component} from 'react';
import {render} from 'react-dom' ;
import {Row,div} from 'react-materialize';

class Home extends Component {
    render(){
        return (
            <Row>
                teste
            </Row>
        );
    }

}

render(<Home />, document.getElementById('container'));




