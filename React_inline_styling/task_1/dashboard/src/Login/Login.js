import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { render } from 'enzyme';

function Login() {
  return (
    <React.Fragment>
      <div className={css(styles.loginMargin)}>
        <p>Login to access the full dashboard</p>
    
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
        
        <button className={css(styles.okButton)}>OK</button>
      </div>
  </React.Fragment>
  )
}

// APHRODITE STYLES

const styles = StyleSheet.create({
  loginMargin: {
    margin: '5rem'
  },
  
  loginInputMargin: {
    margin: '1rem'
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
