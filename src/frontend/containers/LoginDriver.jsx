import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import twitterLogo from '../assets/static/twitter-icon.png';
import googleLogo from '../assets/static/google-icon.png';

const Login = (props) => {
  return (
    <section className='login'>
      <section className='login__container'>
        <h2>Inicia sesión</h2>
        <form className='login__container--form' >
          <input
            name='email'
            className='input'
            type='text'
            placeholder='Correo'
          />
          <input
            name='password'
            className='input'
            type='password'
            placeholder='Contraseña'
          />
          <button type='button' className='login__container--button'>Iniciar sesión</button>
          <div className='login__container--remember-me'>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label>
              <input type='checkbox' id='cbox1' value='first_checkbox' />
              Recuérdame
            </label>
            <a href='/'>Olvidé mi contraseña</a>
          </div>
        </form>
        <section className='login__container--social-media'>
          <div>
            <img src={googleLogo} alt='Inicia sesión con Google' />
            Inicia sesión con Google
          </div>
          <div>
            <img src={twitterLogo} alt='Inicia sesión con Twitter' />
            Inicia sesión con Twitter
          </div>
        </section>
        <p className='login__container--register'>
          No tienes ninguna cuenta
          { ' ' }
          <Link to='/register'>Regístrate</Link>
        </p>
      </section>
    </section>
  );
};

export default connect(null, null)(Login);
