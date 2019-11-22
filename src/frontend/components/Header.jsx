import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/HojaT.png';
import { logoutRequest } from '../actions';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
    document.cookie = 'email=';
    document.cookie = 'name=';
    document.cookie = 'id=';
    window.location.href = '/';
  };

  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Trip Inc logo' />
        <p className='header__text'>Trip Inc</p>
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          { !hasUser ? (
            <Link to='/register'>
              <p>Registrate</p>
            </Link>
          ) : null}
        </div>
        <div className='header__menu--profile'>
          {
            hasUser ?
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <a href='#' onClick={handleLogout}>Cerrar Sesión</a> : (
                <Link to='/login'>
                  <p>Inicia Sesión</p>
                </Link>
              )
          }
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
