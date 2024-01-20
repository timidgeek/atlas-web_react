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


class App extends Component {

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

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  // if ctrl+h, perform operations
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
      listNotifications, 
      isLoggedIn } = this.props;

    // jsx
    return (
      <React.Fragment>
      <div className={css(styles.appHeader)}>
        <Header />
        <div className={css(styles.menuNotifications)}>
          <Notifications listNotifications={listNotifications}  /> 
        </div>
      </div>
        <div className={css(styles.arial)}>
          {isLoggedIn ? 
          <BodySectionWithMarginBottom title="Course list">
            <CourseList listCourses={listCourses}/>
          </BodySectionWithMarginBottom>
          : 
          <BodySectionWithMarginBottom 
            title="Log in to continue">
            <Login />
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

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => null, // default value for func is 'empty'
}


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
