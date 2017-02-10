import React from 'react';
import ReactDOM from 'react-dom';
import {GoogleApiWrapper,Map, InfoWindow} from 'google-maps-react';
import {Marker} from './Marker.js'
import axios from 'axios';
import CookieStore from '../modules/cookie_store.js';
import Errors from '../common/errors.component.jsx';
import CardBar from '../events/card_bar.component.jsx';



export class SimpleContainer extends React.Component {

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


    onMarkerClick(props, marker, e){
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

    componentWillMount(){
      navigator.geolocation.getCurrentPosition((position) => {
           var pos = {
             lat: position.coords.latitude,
             lng: position.coords.longitude
           };
           this.setState({
              pos:pos
           })
     })
    }


    render() {
      const bars = [this.props.bar]
      var pos = null
      if (this.props.bar.name != "" ){
        pos = this.props.bar.geometry.location
      } else
      {
        pos = this.state.pos
      }


      return (
          <div className="teste">
            <Map google={this.props.google}
                  containerStyle = {{width: '100%' , height: '100%', position: 'relative'}}
                  className={'map'}
                  zoom={14}
                  center={pos}>
                 {
                    bars.map((bar,i) => <Marker name={bar.name}
                                                bar={bar}
                                                onClick={this.onMarkerClick.bind(this)}
                                                position={bar.geometry.location}
                                                key={i}/>)
                  }
                    <InfoWindow
                      marker={this.state.activeMarker}
                      visible={this.state.showingInfoWindow}>
                        <CardBar bar={this.state.selectedPlace}/>
                    </InfoWindow>

            </Map>
                      </div>
      );
  }
}

export default GoogleApiWrapper({
  apiKey: __MAPS_API_KEY__
})(SimpleContainer)
