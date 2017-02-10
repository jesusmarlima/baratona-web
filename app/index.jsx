import React from 'react';
import {render} from 'react-dom' ;
import {browserHistory ,Router, Route, IndexRoute} from 'react-router';
import {Row,div} from 'react-materialize';
import Navigator from './common/navigator.component.jsx';
import Home from './common/home.component.jsx';
import Success from './common/success.component.jsx'
import Login from './session/login.component.jsx';
import CookieStore from './modules/cookie_store.js';
import Register from './session/register.component.jsx';
import Dashboard from './users/dashboard.component.jsx';
import NewEvent from './events/new_event.component.jsx';
import Container from './maps/container.component.jsx';
import CardBar from './events/card_bar.component.jsx';


const requireAuth = (nextState, replace) => {
     if (!CookieStore.isUserAuthenticated()){
         replace({pathname: "/login"})
     }
}

render(
    <Router history={browserHistory}>
        <Route path="/" component={Navigator}>
            <IndexRoute component={Home} onEnter={requireAuth} />
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
              <Route path="/maps" component={Container}/>
            <Route path="/events" component={NewEvent}/>
            <Route path="/cardbar" component={CardBar}/>
              <Route path="/success/:message" component={Success}/>
            <Route path="/users/dashboard" component={Dashboard} onEnter={requireAuth}/>
        </Route>
    </Router>
    ,document.getElementById('content')
);
