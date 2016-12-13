import React from 'react';
import {render} from 'react-dom' ;
import {browserHistory ,Router, Route, IndexRoute} from 'react-router';
import {Row,div} from 'react-materialize';
import Navigator from './common/navigator.component.jsx';
import Home from './common/home.component.jsx'
import Login from './session/login.component.jsx';


render(
    <Router history={browserHistory}>
        <Route path="/" component={Navigator}>
            <IndexRoute component={Home} />
            <Route path="/login" component={Login}/>
        </Route>
    </Router>
    ,document.getElementById('container')
);


