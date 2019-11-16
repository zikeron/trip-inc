import React, { useState } from 'react';
import { DirectionsRenderer, DirectionsService, GoogleMap, LoadScript, StandaloneSearchBox } from '@react-google-maps/api';
import { googleMapsApiKey } from '../environment/environment';

const labels = {
  BUTTON_CONSULT: 'Consultar',
  ESTIMATED_TIME: 'Tiempo estimado',
  CURRENCY: 'MXN',
};

const Map = (props) => {
  const [map, setValues] = useState({
    origin: '',
    destination: '',
    response: null,
    duration: '',
    distance: '',
    searchBox: null,
  });

  const rate = 8.31;

  const formatter = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2,
  });

  const directionsCallback = (response) => {
    if (response !== null) {
      if (response.status === 'OK') {
        setValues({
          ...map,
          response,
          duration: response.routes[0].legs[0].duration.text,
          distance: response.routes[0].legs[0].distance.value / 1000,
          price: formatter.format(map.distance * rate),
        });

      } else {
        console.log('response: ', response);
      }
    }
  };

  const onClick = () => {
    const origin = document.getElementById('origin').value;
    const destination = document.getElementById('destination').value;
    if (origin !== '' && destination !== '') {
      setValues({
        ...map,
        origin,
        destination,
      });
    }
  };

  return (
    <LoadScript
      id='script-loader'
      googleMapsApiKey={googleMapsApiKey}
      libraries={['places']}
    >
      <StandaloneSearchBox
        onLoad={(ref) => setValues({
          ...map,
          searchBox: ref,
        })}
        onPlacesChanged={() => console.log('onPlacesChanged', map.searchBox.getPlaces())}
      >
        <input
          type='text'
          name='origin'
          id='origin'
          className='origin'
          placeholder='Ingresa el punto de partida'
        />
      </StandaloneSearchBox>
      <StandaloneSearchBox
        onLoad={(ref) => setValues({
          ...map,
          searchBox: ref,
        })}
        onPlacesChanged={() => console.log('onPlacesChanged', map.searchBox.getPlaces())}
      >
        <input
          type='text'
          name='destination'
          id='destination'
          className='destination'
          placeholder='¿A dónde vas?'
        />
      </StandaloneSearchBox>
      <button
        type='button'
        color='info'
        className='search'
        size='lg'
        block
        onClick={onClick}
      >
        {labels.BUTTON_CONSULT}
      </button>
      <input type='text' name='price' id='price' className='price' value={map.price} readOnly />
      {labels.CURRENCY}
      <input type='text' name='duration' id='duration' className='duration' value={map.duration} readOnly />
      {labels.ESTIMATED_TIME}
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

