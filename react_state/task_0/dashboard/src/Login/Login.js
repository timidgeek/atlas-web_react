import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { render } from 'enzyme';

function Login() {
  return (
    <React.Fragment>
      <div className={css(styles.loginMargin)}>
        <p className={css(styles.italic)}>Login to access the full dashboard</p>
        <form className={css(styles.form)}>
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email"
            className={css(styles.loginInputMargin)}
            />

          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            name="password"
            className={css(styles.loginInputMargin)}/>
          </form>

          <button className={css(styles.okButton)}>OK</button>
      </div>
  </React.Fragment>
  )
}

// APHRODITE STYLES

const styles = StyleSheet.create({
  loginMargin: {
    margin: '5rem',
    '@media screen and (max-width: 900px)': {
      margin: '0rem'
    }
  },
  
  loginInputMargin: {
    margin: '1rem',
  },

  form: {
    '@media screen and (max-width: 900px)': {
      display: 'flex',
      flexDirection: 'column',
    }
  },

  italic: {
    fontStyle: 'italic',
    fontSize: '14px',
  },

  okButton: {
    borderRadius: '50%',
    color: '#001947',
    border: 'none',
    fontSize: '15px',
    backgroundColor: '#5FD3B0',
    cursor: 'pointer',
    padding: '5px 15px 5px 15px',
    ':hover': {
      color: 'white',
    },
  },

})

export default Login;
