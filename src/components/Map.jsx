import React, { useState } from 'react';
import { DirectionsRenderer, DirectionsService, GoogleMap, LoadScript, StandaloneSearchBox } from '@react-google-maps/api';
import { Button, Col, Form, FormGroup, Input } from 'reactstrap';
import { googleMapsApiKey } from '../environment/environment';

const Map = (props) => {
  const [map, setValues] = useState({
    origin: '',
    destination: '',
    response: {},
    duration: '',
    distance: '',
  });

  const rate = 8.31;

  const formatter = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2,
  });

  const handleInput = (event) => {
    setValues({
      ...map,
      [event.target.name]: event.target.value,
    });
  };

  const directionsCallback = (response) => {
    if (response !== null) {
      if (response.status === 'OK') {
        console.log(response);
        map.response = response;
        map.duration = response.routes[0].legs[0].duration.text;
        map.distance = response.routes[0].legs[0].distance.value / 1000;
        map.price = formatter.format(map.distance * rate);
      } else {
        console.log('response: ', response);
      }
    }
  };

  const onClick = () => {
    if (map.origin !== '' && map.destination !== '') {
      console.log(map);
    }
  };

  return (
    <LoadScript
      id='script-loader'
      googleMapsApiKey={googleMapsApiKey}
      libraries={['places']}
    >
      <StandaloneSearchBox
        onLoad={(ref) => map.searchBox = ref}
        onPlacesChanged={
          () => console.log('onPlacesChanged', map.searchBox.getPlaces())
        }
      >
        <Form>
          <FormGroup row>
            <Col sm={12}>
              <Input
                type='text'
                name='origin'
                id='origin'
                placeholder='Ingresa el punto de partida'
                onBlur={handleInput}
              />
            </Col>
          </FormGroup>
        </Form>
      </StandaloneSearchBox>
      <StandaloneSearchBox
        onLoad={
          (ref) => {
            map.searchBox = ref;
          }
        }
        onPlacesChanged={
          () => console.log('onPlacesChanged', map.searchBox.getPlaces())
        }
      >
        <FormGroup row>
          <Col sm={12}>
            <Input
              type='text'
              name='destination'
              id='destination'
              placeholder='¿A dónde vas?'
              onBlur={handleInput}
            />
          </Col>
        </FormGroup>
      </StandaloneSearchBox>
      <FormGroup row>
        <Col sm={6}>
          <Button
            color='info'
            size='lg'
            block
            onClick={onClick}
          >
            Consultar
          </Button>
        </Col>
        <Col sm={3}>
          <input type='text' name='destination' id='destination' value={map.price} />
        </Col>
        <Col sm={3}>
          <input type='text' name='destination' id='destination' value={map.duration} readOnly />
          Tiempo estimado
        </Col>
      </FormGroup>
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
      >
        {
          (
            map.destination !== '' &&
            map.origin !== ''
          ) && (
            <DirectionsService
              // required
              options={{
                destination: map.destination,
                origin: map.origin,
                travelMode: 'DRIVING',
              }}
              // required
              callback={directionsCallback}
              // optional
              onLoad={(directionsService) => {
                console.log('DirectionsService onLoad directionsService: ', directionsService);
              }}
              // optional
              onUnmount={(directionsService) => {
                console.log('DirectionsService onUnmount directionsService: ', directionsService);
              }}
            />
          )
        }

        {
          map.response !== null && (
            <DirectionsRenderer
              // required
              options={{
                directions: map.response,
              }}
              // optional
              onLoad={(directionsRenderer) => {
                console.log('DirectionsRenderer onLoad directionsRenderer: ', directionsRenderer);
              }}
              // optional
              onUnmount={(directionsRenderer) => {
                console.log('DirectionsRenderer onUnmount directionsRenderer: ', directionsRenderer);
              }}
            />
          )
        }
      </GoogleMap>
    </LoadScript>
  );

};

export default Map;
