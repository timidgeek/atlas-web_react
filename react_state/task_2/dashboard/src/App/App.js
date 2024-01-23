// imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from './AppContext'


class App extends Component {

  //constructor
  constructor(props) {
    super(props);

   // local state
    this.state = {
      displayDrawer: false,
      user: {
        email: '',
        password: '',
        isLoggedIn: false
      },
      logOut: () => {},
    };
  }

  // login/out handlers
   logIn = (email, password) => {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  };
  logOut = () => {
    this.setState({
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
    });
  };

  // drawer visibility handlers
  handleDisplayDrawer = () => {
    this.setState({
      displayDrawer: true
    });
  }
  handleHideDrawer = () => {
    this.setState({
      displayDrawer: false 
    });
  }

  // prop arrays
  listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];
  listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: { __html: "<strong>Urgent requirement</strong> - complete by EOD" } },
  ]

  // if ctrl+h, perform operations
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  };

  // render method to handle jsx rendering
  render() {
    // initialize props
    const { 
      listCourses, 
      listNotifications } = this.props;
    
    // initialize state
    const { displayDrawer, user } = this.state;

    // jsx
    return (
      <React.Fragment>
      <div className={css(styles.appHeader)}>
        <Header />
        <div className={css(styles.menuNotifications)}>
          <Notifications // pass new func
            listNotifications={listNotifications}
            displayDrawer={displayDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
          /> 
        </div>
      </div>
        <div className={css(styles.arial)}>
          {user.isLoggedIn ? 
          <BodySectionWithMarginBottom title="Course list">
            <CourseList listCourses={listCourses}/>
          </BodySectionWithMarginBottom>
          : 
          <BodySectionWithMarginBottom 
            title="Log in to continue">
            <Login logIn={this.logIn} />
          </BodySectionWithMarginBottom> }
          <BodySection 
            title="News from the School">
            <p>Breaking news! We have rebranded!</p>
          </BodySection>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

// PROP TYPES

App.propTypes = {}

App.defaultProps = {}


// APHRODITE STYLES

const styles = StyleSheet.create({
  arial: {
    fontFamily: 'Arial, Helvetica, sans-serif',
  },
  
  appHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: '#FFFAE6',
    width: '100%',
    borderBottom: '3px #6A7AC0 solid',
  },
  
  menuNotifications: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },

  body: {
    fontFamily: 'Arial, Helvetica, sans-serif',
  },

  footer: {
    position: 'absolute',
      bottom: '0',
      borderTop: '3px #6A7AC0 solid',
      width: '100%',
      backgroundColor: '#FFFAE6',

      ":p": {
        textAlign: 'center',
        fontStyle: 'italic',
    }
  },
});


export default App;
