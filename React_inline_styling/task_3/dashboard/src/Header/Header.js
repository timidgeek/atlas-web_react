import React from 'react';
import logo from '../assets/atlas_logo.png';
import { StyleSheet, css } from 'aphrodite';

function Header() {
  return (
    <header className={css(styles.header)}>
      <img src={logo} className={css(styles.appLogo)} alt="Atlas Logo" />
      <h1 className={css(styles.headerH1)}>School dashboard</h1>
    </header>
  )
}

// APHRODITE STYLES

const styles = StyleSheet.create({
  header: {
    height: '15rem',
    backgroundColor: '#FFFAE6',
    display: 'flex',
    alignItems: 'center',
    color: '#001947'
  },
  
  headerH1: {
    display: 'inline',
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
})

export default Header;