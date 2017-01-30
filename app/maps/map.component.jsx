import React from 'react';
import ReactDOM from 'react-dom';
import GoogleApiComponent from './GoogleApiComponent.js'


export class Map extends React.Component {

  constructor(props) {
      super(props);

      const {lat, lng} = this.props.initialCenter;
      this.state = {
        currentLocation: {
          lat: lat,
          lng: lng
        }
      }
    }

  componentDidMount() {
    this.loadMap();
  }

  componentDidUpdate(prevProps, prevState) {
  if (prevProps.google !== this.props.google) {
    this.loadMap();
  }
}

  loadMap() {

    if (this.props && this.props.google) {
      // google is available
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let {initialCenter, zoom} = this.props;
      const {lat, lng} = this.state.currentLocation;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
     this.map = new maps.Map(node, mapConfig);
      maps.event.trigger(this.map, 'ready');
    }
        this.forceUpdate()
  }

  renderChildren() {
    const {children} = this.props;

    if (!children) return;

    return React.Children.map(children, c => {
      return React.cloneElement(c, {
        map: this.map,
        google: this.props.google,
        mapCenter: this.state.currentLocation
      });
    })

  }

  render() {
    const style = {
      width: '100vw',
      height: '80vh'
    }
    return (
      <div style={style} ref='map'>
        Loading map...
         {this.renderChildren()}
      </div>
    )
  }
}

Map.propTypes = {
  google: React.PropTypes.object,
  zoom: React.PropTypes.number,
  initialCenter: React.PropTypes.object
}


Map.defaultProps = {
  zoom: 15,
  // San Francisco, by default
  initialCenter: {
    lat: 40.660328,
    lng: -73.9771258
  }
}

export default Map
