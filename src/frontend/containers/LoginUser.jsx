import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import twitterLogo from '../assets/static/twitter-color.png';
import googleLogo from '../assets/static/google-color.png';
import '../assets/styles/components/LoginUser.scss';
import { loginUser } from '../actions';

const Login = (props) => {
  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginUser(form, '/main');
  };

  return (
    <section className='login'>
      <section className='login__container'>
        <h2>Inicia sesión</h2>
        <form className='login__container--form' onSubmit={handleSubmit}>
          <input
            name='email'
            className='input'
            type='text'
            placeholder='Correo'
            onChange={handleInput}
            required
          />
          <input
            name='password'
            className='input'
            type='password'
            placeholder='Contraseña'
            onChange={handleInput}
            required
          />
          <button type='submit' className='login__container--button'>Iniciar sesión</button>
          <div className='login__container--remember-me'>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label>
              <input type='checkbox' id='cbox1' value='first_checkbox' />
              {'  '}
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

const mapDispatchToProps = {
  loginUser,
};

export default connect(null, mapDispatchToProps)(Login);
