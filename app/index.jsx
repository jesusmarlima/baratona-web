import React from 'react';
import {render} from 'react-dom' ;
import {browserHistory ,Router, Route, IndexRoute} from 'react-router';
import {Row,div} from 'react-materialize';
import Navigator from './common/navigator.component.jsx';
import Home from './common/home.component.jsx'
import Login from './session/login.component.jsx';
import Auth from './session/Auth.js'

const requireAuth = (nextState, replace) => {
     if (!Auth.isUserAuthenticated()){
         replace({pathname: "/login"})
     }

}

render(
    <Router history={browserHistory}>
        <Route path="/" component={Navigator} >
            <IndexRoute component={Home} onEnter={requireAuth} />
            <Route path="/login" component={Login}/>
        </Route>
    </Router>
    ,document.getElementById('container')
);


