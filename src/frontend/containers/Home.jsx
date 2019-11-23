import React, { Component } from 'react';
import Parallax from 'react-springy-parallax';
import parallax1 from '../assets/static/conductorpng.png';
import parallax2 from '../assets/static/Girl-1080x540.jpg';
import parallax3 from '../assets/static/TripInc-passengers.jpg';
import '../assets/styles/components/Home.scss';

class Home extends Component {
  render() {
    return (
      <Parallax ref='parallax' pages={3}>
        <Parallax.Layer
          offset={0}
          speed={1}
          style={
            {
              backgroundImage: `url(${parallax1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              objectFit:'cover'
            }
          } />
        <Parallax.Layer
          offset={1}
          speed={1}
          style={
            {
              backgroundImage: `url(${parallax2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              objectFit:'cover'
            }
          } />
        <Parallax.Layer
          offset={2}
          speed={1}
          style={
            {
              backgroundImage: `url(${parallax3})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              objectFit:'cover'
            }
          }/>
        <Parallax.Layer
          offset={0}
          speed={0.5}
          className='parallax'
          onClick={() => this.refs.parallax.scrollTo(1)}
        >
          ¡Disfruta de un viaje seguro en manos de nuestros conductores profesionales!
        </Parallax.Layer>
        <Parallax.Layer
          offset={1}
          speed={-0.1}
          className='parallax'
          onClick={() => this.refs.parallax.scrollTo(2)}
        >
          Nos preocupamos por el medio ambiente, es por eso que nuestros autos son eléctricos, contribuyendo a bajar las emisiónes de carbono en el planeta
        </Parallax.Layer>
        <Parallax.Layer
          offset={2}
          speed={0.5}
          className='parallax'
          onClick={() => this.refs.parallax.scrollTo(0)}
        >
          Todos nuestros conductores pasan por un proceso de reclutamiento el cual garantiza tu seguridad y tranquilidad.
        </Parallax.Layer>
      </Parallax>
    );
  }
}

export default Home;
