import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';
import fireApp from '../initializers/firebase';
import Map from './Map';
import { setName } from '../reducers';

class Main extends Component {
  componentDidMount() {
    this.props.setName('Alex');
    /*  const databaseRef = fireApp.database()
        .ref()
        .child('users')
        .child('name');
      databaseRef.on('value', (snapshot) => {
        console.log(snapshot.val());
        this.props.setName(snapshot.val());
      });*/
  }

  render() {
    return (
      <>
        <Alert color='dark' className='mt-3'>
          Hola de nuevo
          {' '}
          {this.props.name}
          {' '}
          {}
        </Alert>
        <Map />
      </>
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

