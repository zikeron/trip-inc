import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

class Map extends Component {
  render() {
    return (
      <LoadScript
        id='script-loader'
        googleMapsApiKey='AIzaSyC-QhbmiplvD7mRFUfSLqfbXHOJve_vZ9A'
      >
        <GoogleMap
          id='example-map'
          mapContainerStyle={{
            height: '400px',
            width: '800px',
          }}
          zoom={17}
          center={{
            lat: 19.4267211,
            lng: -99.1696819,
          }}
        />
      </LoadScript>
    );
  }
}

export default Map;
