import React, { Component } from 'react';
import { GoogleMap, LoadScript, StandaloneSearchBox } from '@react-google-maps/api';
import { Col, Form, FormGroup, Input } from 'reactstrap';
import { googleMapsApiKey } from '../environment/environment';

class Map extends Component {
  render() {
    return (
      <LoadScript
        id='script-loader'
        googleMapsApiKey={googleMapsApiKey}
        libraries={['places']}
      >
        <StandaloneSearchBox
          onLoad={ref => this.searchBox = ref}
          onPlacesChanged={
            () => console.log(this.searchBox.getPlaces())
          }
        >
          <Form>
            <FormGroup row>
              <Col sm={12}>
                <Input type='text' name='origin' id='origin' placeholder='Ingresa el punto de partida' />
              </Col>
            </FormGroup>
          </Form>
        </StandaloneSearchBox>
        <StandaloneSearchBox
          onLoad={ref => this.searchBox = ref}
          onPlacesChanged={
            () => console.log(this.searchBox.getPlaces())
          }
        >
          <FormGroup row>
            <Col sm={12}>
              <Input type='text' name='destination' id='destination' placeholder='¿A dónde vas?' />
            </Col>
          </FormGroup>
        </StandaloneSearchBox>
        <GoogleMap
          id='example-map'
          mapContainerStyle={{
            height: '100%',
            width: '100%',
            minHeight: '400px',
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
