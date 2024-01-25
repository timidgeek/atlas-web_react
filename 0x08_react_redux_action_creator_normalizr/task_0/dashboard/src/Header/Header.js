import React, { Component } from 'react';
import logo from '../assets/atlas_logo.png';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';

class Header extends Component {
  static contextType = AppContext; // inhert context using contextType API

  render() {
    const { user, logOut } = this.context; // extract user from context object

    return (
        <header className={css(styles.header)}>
          <img src={logo} className={css(styles.appLogo)} alt="Atlas Logo" />
          <h1 className={css(styles.headerH1)}>School dashboard</h1>

        {user.isLoggedIn && (
          <div
            className={css(styles.logOutBox, styles.arial)} 
            id="logoutSection">
              Welcome {user.email}!
            <span 
              className={css(styles.logOutButton)} 
              onClick={logOut}>
                logout
            </span>
          </div>
        )}
        </header>
    );
  }
}

// APHRODITE STYLES

const styles = StyleSheet.create({
  header: {
    height: '15rem',
    backgroundColor: '#FFFAE6',
    display: 'flex',
    alignItems: 'center',
    color: '#001947',
    marginRight: '0',
  },

  logOutBox: {
    position: 'absolute',
    right: '1rem',
    top: '13rem'
  },
  
  headerH1: {
    display: 'inline',
    fontFamily: 'Arial, Helvetica, sans-serif',
  },

  arial: {
    fontFamily: 'Arial, Helvetica, sans-serif',
  },
  
  appLogo: {
    maxWidth: '20rem',
    maxHeight: '10rem',
    '@media screen and (max-width: 900px)': {
      maxWidth: '10rem',
      maxHeight: '5rem',
    }
  },

  logOutButton: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    borderRadius: '50%',
    color: '#001947',
    border: 'none',
    fontSize: '15px',
    backgroundColor: '#5FD3B0',
    cursor: 'pointer',
    marginLeft: '1rem',
    padding: '5px 15px 5px 15px',
    ':hover': {
      color: 'white',
    },
    '@media screen and (max-width: 900px)': {
      maxWidth: '70px',
      // right: '5rem'
    }
  },
})

export default Header;