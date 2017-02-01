import React from 'react';
import ReactDOM from 'react-dom';
import GoogleApiComponent from './GoogleApiComponent.js'
import Map from './map.component.jsx'
import Marker from './marker.component.jsx'
import InfoWindow from './info_window.component.jsx'
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
          pos:{lat: 40.660828, lng: -73.9771258},
          name:"",
          bar:{name:"",icon:""}
      }
    }

    handleChange(event){
      this.search(event.target.value);
    }


    search(text_to_search){
      let token = CookieStore.getToken()
      let credentials = {text_to_search: text_to_search}

      axios.defaults.baseURL = '__BARATONA_API_URL__';
      axios.defaults.headers.common['Authorization'] = token;
      axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      axios.get(__BARATONA_API_URL__ + '/search_by_text/' + credentials.text_to_search)
          .then((response) => {
            var bars = response.data.bars
            var location = bars[0].geometry.location
            this.setState({
              bar: bars[0],
              pos: location,
              name: bars[0].name})
          })
          .catch((error) => {
            if (error.response){
              this.setState({errors: error.response.data})
            }
          })
      }

    onMarkerClick(props, marker, e){
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });

      this.props.onClick(this.state.bar)
    }

    onInfoWindowClose(){
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }

    render() {
    return (
      <div className="row" >
        <div>
          <header>
            <h3>{this.state.text_to_search}</h3>
            <input className='search-imput' type='text' placeholder='Search' onBlur={this.handleChange.bind(this)}/>
          </header>
        </div>
        <div>
          <Map google={this.props.google} style={this.props.style}>
            <Marker
              onClick={this.onMarkerClick.bind(this)}
              name={this}
              position={this.state.pos}/>
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onInfoWindowClose.bind(this)}>
                <CardBar bar={this.state.bar} />
            </InfoWindow>
          </Map>
        </div>
      </div>
    );
  }
}

export default GoogleApiComponent({
  apiKey: __MAPS_API_KEY__
})(Container)
