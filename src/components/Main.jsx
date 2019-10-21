import React, { Component } from 'react';
import { Alert, Col, Form, FormGroup, Input, Row } from 'reactstrap';
import { connect } from 'react-redux';
import firebase from '../initializers/firebase';
import Map from './Map';
import { setName } from '../reducers';

class Main extends Component {
  componentDidMount() {
    const databaseRef = firebase.database().ref().child('users').child('dP0tKcE2UuR1vM6bZUtI');
    databaseRef.on('value', (snapshot) => {
      this.props.setName(snapshot.val());
    });
  }

  render() {
    return (
      <>
        <Row>
          <Col md='3'>
            <Alert color='dark' className='mt-3'>
              Hola de nuevo
              {' '}
              {this.props.name}
              {' '}
              {}
            </Alert>
          </Col>
          <Col md='9'>
            <Map />
          </Col>
        </Row>
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

