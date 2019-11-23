import React from 'react';
import '../assets/styles/components/Footer.scss';
import { connect } from 'react-redux';

const Footer = (props) => {
  const { user } = props;
  const footerClass = Object.keys(user).length > 0 ? 'footer relative' : 'footer fixed';
  return (
    <footer className={footerClass}>
      <a href='/'>Terminos de uso</a>
      <a href='/'>Declaración de privacidad</a>
      <a href='/'>Centro de ayuda</a>
    </footer>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps, null)(Footer);
