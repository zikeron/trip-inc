import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className='App'>
    <Header />
    <Container>
      <Row>
        <Col>
          {children}
        </Col>
      </Row>
    </Container>
    <Footer />
  </div>
);

export default Layout;
