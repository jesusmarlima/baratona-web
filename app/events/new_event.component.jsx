import React from 'react';
import CookieStore from '../modules/cookie_store.js';
import axios from 'axios';
import {browserHistory} from 'react-router'
import {Row, Input,Button,Icon} from 'react-materialize';
import Errors from '../common/errors.component.jsx'
import Container from '../maps/container.component.jsx';

class NewEvent extends React.Component{


  constructor(props){
      super(props);
      this.handleClick = this.handleClick.bind(this)
      this.handleChange = this.handleChange.bind(this)
      this.state = {
          errors:{},
          BaseBar:"",
          location:""
      }
  }


  checkDate() {
    if (this.refs.date.value == '') {
      this.refs.date.className = "datepicker validate picker__input invalid"
      return false;
    } else {
      this.refs.date.className = "datepicker validate picker__input valid"
      return true;
    }
  }

  checkLocation() {
    if (this.refs.base_location.value == '') {
      this.refs.base_location.className = "validate invalid"
      return false;
    } else {
      this.refs.date.className = "valid"
      return true;
    }
  }

  handleClick(bar){
    this.setState({
      BaseBar:bar
    })
  }

  handleChange(event){
    this.setState(
      {
        location:event.target.value
    })
  }


  create(e){
      e.preventDefault()
      if (!this.checkDate()){
        return null
      }
      if (!this.checkLocation()){
        return null
      }
      let token = CookieStore.getToken()

      var dateStr = this.refs.date.value + " " + this.refs.hour.value
      let credentials = {name:this.refs.name.value, description:this.refs.description.value, base_location:this.refs.base_location.value, date:dateStr, email: CookieStore.getUser().email }


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
      <div className="row">
        <div className="col s12 m6 l6">
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
              <div className="input-field col s9 m9 l19">
                <input ref="date" type="date" className="datepicker"/>
                <label htmlFor="date">Date</label>
              </div>
              <div className="input-field col s3 m3 l3">
                <input ref="hour" id="hour" type="text" className="validate" required/>
                <label htmlFor="hour">hour/Minutes (hh:mm)</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12 m12 l12">
                <input ref="base_location" id="base_location" type="text" onChange={this.handleChange} value={this.state.BaseBar? JSON.stringify(this.state.BaseBar):""} className="validate" required disabled/>
                <label htmlFor="base_location">Base location</label>
              </div>
            </div>
              <div className="row center">
                    <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                    <i className="material-icons right">send</i>
                  </button>
              </div>
          </form>
        </div>
        <div className="col s12 m6 l6">
            <Container style={{width: '100%',height: '50vh'}} onClick={this.handleClick}></Container>
        </div>
      </div>
    );
  }

}

export default NewEvent;
