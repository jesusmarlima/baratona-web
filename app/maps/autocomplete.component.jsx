import React, { Component } from 'react';
import {GoogleApiWrapper,Map, InfoWindow} from 'google-maps-react';

class AutoComplete extends React.Component {
    constructor(props){
        super(props)
    }

    handleChoose(value){
        this.props.selectedPlace(value)
    }


    componentDidMount(){
        var defaultBounds = new this.props.google.maps.LatLngBounds(
            new google.maps.LatLng(-33.8902, 151.1759),
            new google.maps.LatLng(-33.8474, 151.2631));

        var options = {
        bounds: defaultBounds,
        types: ['establishment']
        };
    
       var autocomplete = new this.props.google.maps.places.Autocomplete(this.refs.texto, options);
       var _this = this;
       autocomplete.bindTo('rw',this)
        autocomplete.addListener('place_changed', () => {
          var place = autocomplete.getPlace();
          this.handleChoose(place.name)

        })
        
    }

    render(){
        return (
            <div>
                <input ref="texto" type="text"/>
            </div>
        );
    }
}

export default AutoComplete;