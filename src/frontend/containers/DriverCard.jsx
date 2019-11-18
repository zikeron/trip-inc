import React from 'react';

const labels = {
  DRIVER_NAME: 'Nombre: ',
  DRIVER_CATEGORY: 'Categoria: ',
  DRIVER_RATING: 'Calificación: ',
  DRIVER_EXPERIENCE: 'Antigüedad: ',
};

const DriverCard = () => (
  <section className='container-driver-card'>
    <div className='row'>
      <div className='avatar-container'>
        <div className='photo'>
          <img className='img' src='https://picsum.photos/200' />
        </div>
      </div>
      <div className='details-container'>
        <div className='content'>
          <h3>
            {`${labels.DRIVER_NAME}Joe Doe`}
          </h3>
          <p>{`${labels.DRIVER_CATEGORY} Trip-Inc Ujules Wow`}</p>
          <p>{`${labels.DRIVER_RATING}4.5`}</p>
          <p>{`${labels.DRIVER_EXPERIENCE}1 año`}</p>
        </div>
      </div>
    </div>
  </section>
);

export default DriverCard;
