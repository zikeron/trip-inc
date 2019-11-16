import React, { Component } from 'react';
import { connect } from 'react-redux';
import Map from './Map';
import { setName } from '../actions/index';
import '../assets/styles/components/Main.scss';

class Main extends Component {
  render() {
    return (
      <section>
        <h1>
          Hola de nuevo
          {' '}
          {this.props.name}
          {' '}
          {}
        </h1>
        <Map />
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.name,
  };
};

const mapDispatchToProps = {
  setName,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

