import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert, Col, Row } from 'reactstrap';
import fireApp from '../initializers/firebase';
import Map from './Map';
import { setName } from '../reducers';

class Main extends Component {
  componentDidMount() {
    const databaseRef = fireApp.database().ref().child('users').child('name');
    databaseRef.on('value', (snapshot) => {
      console.log(snapshot.val());
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

