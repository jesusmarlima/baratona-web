import React from 'react';
import ReactDOM from 'react-dom';
import {GoogleApiWrapper,Map, Marker, InfoWindow} from 'google-maps-react';
import axios from 'axios';
import CookieStore from '../modules/cookie_store.js';
import Errors from '../common/errors.component.jsx';
import CardBar from '../events/card_bar.component.jsx';



export class Container extends React.Component {

  constructor(props){
    super(props);
      this.state = {
          showingInfoWindow: false,
          activeMarker: {},
          selectedPlace: {},
          text_to_search:"",
          name:"",
          bars:[],
          pos:null
      }
    }


    handleChange(event){
      this.search(event.target.value);
    }


    handleResponse(response){

      var bars = response.data.bars

      if (bars.length == 0) {
        alert("No Bars whith this name")
      } else if (bars.length == 1) {
        this.props.onClick(bars[0])

        this.setState({
          bars: bars,
          pos: bars[0].geometry.location,
          name: bars[0].name})
      } else {
        this.setState({
          bars: bars,
          pos: bars[0].geometry.location,
          name: bars[0].name
      })
      }

    }


    search(text_to_search){
      let token = CookieStore.getToken()
      let credentials = {text_to_search: text_to_search}

      axios.defaults.baseURL = '__BARATONA_API_URL__';
      axios.defaults.headers.common['Authorization'] = token;
      axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      axios.get(__BARATONA_API_URL__ + '/search_by_text/' + credentials.text_to_search)
          .then((response) => this.handleResponse(response))
          .catch((error) => {
            if (error.response){
              this.setState({errors: error.response.data})
            }
          })
    }

    onMarkerClick(props, marker, e){

      this.props.onClick(props.bar)

      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });

    }

    onInfoWindowClose(){
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }

    render() {
      const bars = this.state.bars
      const pos = this.state.pos
      return (
        <div className="row" >
          <div>
            <header>
              <h3>{this.state.text_to_search}</h3>
              <input className='search-imput' type='text' placeholder='Search your Base Bar' onBlur={this.handleChange.bind(this)}/>
            </header>
          </div>
          <div>
            <Map google={this.props.google}
                  style={{width: '50%', height: '50%'}}
                  className={'map'}
                  zoom={6}
                  center={pos}>
                 {
                    bars.map((bar,i) => <Marker name={bar.name} bar={bar} onClick={this.onMarkerClick.bind(this)} position={bar.geometry.location} key={i}/>)
                  }
                    <InfoWindow
                      marker={this.state.activeMarker}
                      visible={this.state.showingInfoWindow}>
                        <CardBar bar={this.state.selectedPlace}/>
                    </InfoWindow>

            </Map>
          </div>
        </div>
      );
  }
}

export default GoogleApiWrapper({
  apiKey: __MAPS_API_KEY__
})(Container)
