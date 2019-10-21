import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import userImg from '../assets/static/traveling-2977176_1920.jpg';
import driveImg from '../assets/static/web-3164557_1920.jpg';
import '../assets/styles/components/Login.scss';

const Login = (props) => {
  return (
    <>
      <section className='container'>
        <img src={userImg} alt='' />
        <div>
          <h2>Inicia sesión como usuario</h2>
          <Link to='/login-users'>
            <p>Haz click aquí</p>
          </Link>
        </div>
      </section>
      <section className='container'>
        <img src={driveImg} alt='' />
        <div>
          <h2>Inicia sesión como conductor</h2>
          <Link to='login-drivers'>
            <p>Haz click aquí</p>
          </Link>
        </div>
      </section>
    </>
  );
};

export default connect(null, null)(Login);
