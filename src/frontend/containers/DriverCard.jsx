import React from 'react';
import { connect } from 'react-redux';

const labels = {
  DRIVER_NAME: 'Nombre: ',
  DRIVER_CATEGORY: 'Categoria: ',
  DRIVER_RATING: 'Calificación: ',
  DRIVER_EXPERIENCE: 'Antigüedad: ',
};

const DriverCard = (props) => {
  const { driver } = props;
  return (
    <section className='container-driver-card'>
      <div className='row'>
        <div className='avatar-container'>
          <div className='photo'>
            <img className='img' src='https://picsum.photos/200' alt='driver photo' />
          </div>
        </div>
        <div className='details-container'>
          <div className='content'>
            <h3>
              {`${labels.DRIVER_NAME} ${driver.name}`}
            </h3>
            <p>{`${labels.DRIVER_CATEGORY} ${driver.category}`}</p>
            <p>{`${labels.DRIVER_RATING} ${driver.rating}`}</p>
            <p>{`${labels.DRIVER_EXPERIENCE} ${driver.experience} año(s)`}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return { driver: state.driver };
};

export default connect(mapStateToProps, null)(DriverCard);
