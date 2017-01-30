import React from 'react';

export class Marker extends React.Component {

  componentDidUpdate(prevProps) {
    if ((this.props.map !== prevProps.map) ||
      (this.props.position !== prevProps.position)) {
        this.removeMarker();
        this.renderMarker();
    }
  }

  removeMarker(){

    if (this.marker) {
      this.marker.setMap(null);
    }
  }



  renderMarker() {

    const evtNames = ['click'];

    let {
      map, google, position, mapCenter
    } = this.props;

    let pos = position || mapCenter;
    position = new google.maps.LatLng(pos.lat, pos.lng);

    const pref = {
      map: map,
      position: position
    };

    this.marker = new google.maps.Marker(pref);


    evtNames.forEach(e => {
      this.marker.addListener(e, this.handleEvent(e));
    })
  }

  handleEvent(evt){
    return (e) => {
      if (this.props['onClick']){
        this.props['onClick'](this.props,this.marker,e);
      }
    }
  }

  render() {
    return null;
  }

}

Marker.propTypes = {
  position: React.PropTypes.object,
  map: React.PropTypes.object
}

export default Marker
