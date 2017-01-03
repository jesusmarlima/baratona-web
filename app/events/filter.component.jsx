import React, {Component} from 'react';
import axios from 'axios';
import  api_url from '../modules/api_url.js';
import Cookie_store from '../modules/cookie_store.js'

class Filter extends Component {

    constructor(){
        super();
    }

    search(event){

        event.preventDefault();

        debugger
        var bar_name = this.refs.bar_to_find.value ;

        axios.defaults.baseURL = api_url.BASE_URL;
        axios.defaults.headers.common['Authorization'] = Cookie_store.getToken();
        axios.get("/search?bar_name="+bar_name)
            .then((response) => this.props.bars(response))

    }



render() {
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input ref="bar_to_find" id="first_name" type="text" className="validate"/>
                            <label htmlFor="first_name">Bar Name</label>
                        </div>
                        <div className="input-field col s12">
                            <a className="waves-effect waves-light btn" onClick={(event) => this.search(event)}>
                                <i className="material-icons left">search</i>Seach
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
} export default Filter;