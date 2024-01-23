import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { render } from 'enzyme';

class Login extends Component {
  constructor(props) {
    super(props);
    // local state
    this.state = {
      email: '',
      password: '',
      enableSubmit: false
    }
  }

  handleLoginSubmit = (event) => {
    event.preventDefault();
    // call logIn function passed as a prop
    const { email, password } = this.state;
    this.props.logIn(email, password);
  }

  // target email input field
  handleChangeEmail = (event) => {
    this.setState({ 
      email: event.target.value, // update with new email value
      // insure both inputs are not empty
      enableSubmit: event.target.value !== '' 
        && this.state.password !== '' 
    })
  }

  // target password input field
  handleChangePassword = (event) => {
    this.setState({ 
      password: event.target.value,  // update w new password
      // insure both inputs are not empty
      enableSubmit: event.target.value !== ''
        && this.state.email !== ''
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className={css(styles.loginMargin)}>
          <p className={css(styles.italic)}>
            Login to access the full dashboard
          </p>
          <form 
            className={css(styles.form)}
            onSubmit={this.handleLoginSubmit}
          >
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              value={this.state.email}
              className={css(styles.loginInputMargin)}
              onChange={this.handleChangeEmail}
              />

            <label htmlFor="password">Password:</label>
            <input 
              type="password" 
              id="password" 
              name="password"
              value={this.state.password}
              className={css(styles.loginInputMargin)}
              onChange={this.handleChangePassword}
              />
            <input 
              type="submit" 
              value="Login"
              className={css(styles.okButton)}
              disabled={!this.state.enableSubmit} // submit only enabled when local state value is true
              />
            </form>

        </div>
    </React.Fragment>
    )
  }
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
    '@media screen and (max-width: 900px)': {
      maxWidth: '70px',
      right: '5rem'
    }
  },

})

export default Login;
