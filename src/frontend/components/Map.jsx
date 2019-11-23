import React, { useState } from 'react';
import { connect } from 'react-redux';
import { DirectionsRenderer, DirectionsService, GoogleMap, LoadScript, StandaloneSearchBox } from '@react-google-maps/api';
import { googleMapsApiKey } from '../environment/environment';
import DriverCard from '../containers/DriverCard';
import { setDriver } from '../actions';

const labels = {
  BUTTON_CONSULT: 'Consultar',
  BUTTON_CONFIRM_TRIP: 'Confirma viaje',
  ESTIMATED_TIME: 'Tiempo estimado:',
  CURRENCY: 'Costo:',
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
  const { driver } = props;
  const hasDriver = Object.keys(driver).length > 0;

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

  const onHandleConfirm = () => {
    console.log('Set Driver');
    props.setDriver({
      name: 'Jóse',
      category: 'Pro Diamante',
      rating: 4.96,
      experience: '1',
      lat: '',
      lng: '',
    });
  };

  return (
    <LoadScript
      id='script-loader'
      googleMapsApiKey={googleMapsApiKey}
      libraries={['places']}
    >
      <section className='container-main'>
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
        <div className='container-trip-information'>
          <div>
            <label htmlFor='price'>{labels.CURRENCY}</label>
            <input type='text' name='price' id='price' className='price' value={map.price} readOnly />
          </div>
          <div>
            <label htmlFor='duration'>{labels.ESTIMATED_TIME}</label>
            <input type='text' name='duration' id='duration' className='duration' value={map.duration} readOnly />
          </div>
        </div>
        <div className='container-buttons'>
          <div>
            <button
              type='button'
              className='search'
              onClick={onClick}
            >
              {labels.BUTTON_CONSULT}
            </button>
          </div>
          <div>
            <button
              type='button'
              className='search'
              onClick={onHandleConfirm}
            >
              {labels.BUTTON_CONFIRM_TRIP}
            </button>
          </div>
        </div>
      </section>
      {
        (hasDriver) &&
        <DriverCard />
      }
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

const mapStateToProps = (state) => {
  return {
    driver: state.driver,
  };
};

const mapDispatchToProps = {
  setDriver,
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);

