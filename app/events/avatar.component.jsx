import React, {Component} from 'react';
import CookieStore from '../modules/cookie_store.js';

class Avatar extends Component {
    render() {
        return (
            <div className="row">
                <div className="col">
                    <div className="card small">
                        <div className="card-image">
                            <img src="images/sample-1.jpg"/>
                                <span className="card-title">{CookieStore.getUser().name}</span>
                        </div>
                        <div className="card-action">
                            <a href="#">View Profile</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Avatar;