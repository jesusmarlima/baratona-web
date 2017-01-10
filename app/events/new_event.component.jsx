import React from 'react';
import CookieStore from '../modules/cookie_store.js';
import axios from 'axios';
import {browserHistory} from 'react-router'
import {Row, Input,Button,Icon} from 'react-materialize';
import Errors from '../common/errors.component.jsx'

class NewEvent extends React.Component{


  constructor(props){
      super(props);
      this.state = {
          errors:{}
      }
  }


  checkDate() {
    debugger
    if (this.refs.date.value == '') {
      this.refs.date.className = "datepicker validate picker__input invalid"
      return false;
    } else {
      this.refs.date.className = "datepicker validate picker__input valid"
      return true;
    }
  }





  create(e){
      e.preventDefault()
      if (!this.checkDate()){
        return null
      }
      let token = CookieStore.getToken()

      var dateStr = this.refs.date.value + " " + this.refs.hour.value + ":" + this.refs.minutes.value
      let credentials = {name:this.refs.name.value, description:this.refs.description.value, base_location:this.refs.base_location.value, date:dateStr, user: CookieStore.getUser().email }


      var success = "Success, Event " + credentials.name + " was created."

      axios.defaults.baseURL = '__BARATONA_API_URL__' + '/events';
      axios.defaults.headers.common['Authorization'] = token;
      axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      axios.post(__BARATONA_API_URL__ + '/events', credentials)
          .then((response) => browserHistory.push('/success/' + success))
          .catch((error) => {
            if (error.response){
              this.setState({errors: error.response.data})
            }
          })
  }

  render(){
    return(
      <div className="row center">
        <Row>
            <Errors data={this.state.errors}/>
        </Row>
        <form className="col s12" action="" onSubmit={this.create.bind(this)}>
          <div className="row">
            <div className="input-field col s12 m12 l12">
              <input ref="name" id="name" type="text" className="validate" required/>
              <label htmlFor="name">Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12 s12 m12 l12">
              <textarea ref="description" id="description" className="materialize-textarea validate"  required />
              <label htmlFor="description">Description</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12 s12 m12 l12">
              <input ref="base_location" id="base_location" type="text" className="validate" required/>
              <label htmlFor="base_location">Base location</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12 m4 l4">
              <input ref="date" type="date" className="datepicker"/>
              <label htmlFor="date">Date</label>
            </div>
            <div>
                <p className="range-field col s12 m4 l4">
                  <input ref="hour" type="range" id="test5" min="0" max="24"  />
                  <label htmlFor="test5">Hour</label>
                </p>
            </div>
            <div>
                <p className="range-field col s12 m4 l4">
                  <input ref="minutes" type="range" id="test5" min="0" max="59" />
                  <label htmlFor="test5">Minutes</label>
                </p>
            </div>

          </div>
            <div>
              <p className="range-field col s12 m12 l12">
                <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                  <i className="material-icons right">send</i>
                </button>
              </p>
          </div>
        </form>
      </div>
    );
  }

}

export default NewEvent;
