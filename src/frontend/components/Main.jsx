import React from 'react';
import { connect } from 'react-redux';
import Map from './Map';
import '../assets/styles/components/Main.scss';

const Main = (props) => {
  const { user } = props;
  return (
    <section>
      <h1>
        Hola de nuevo
        {' '}
        {user.name}
        {' '}
        {}
      </h1>
      <Map />
    </section>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps, null)(Main);

