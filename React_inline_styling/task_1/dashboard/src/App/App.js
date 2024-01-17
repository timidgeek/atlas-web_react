// imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { StyleSheet } from 'aphrodite';

// const styles = StyleSheet.create({
//   App: {
//     font-family: Arial, Helvetica, sans-serif;
//   }
  
//   .App-header {
//     display: flex;
//     justify-content: space-between;
//     align-items: flex-start;
//     background-color: #FFFAE6;
//     border-bottom: 3px #6A7AC0 solid;
//   }
  
//   .Menu-notifications {
//     display: flex;
//     flex-direction: column;
//     align-items: flex-end;
//   }
// })

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

  // event listener to handle keyboard clicking
  // using `componentDidMount` lifecycle method
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  // if ctrl+h, perform operations
  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.logOut();
    }
  };

  // render method to handle jsx rendering
  render() {
    // initialize props
    const { 
      listCourses, 
      listNotifications, 
      isLoggedIn, 
      logOut } = this.props;

    // jsx
    return (
      <React.Fragment>
      <div className="App-header">
        <Header />
        <div className="Menu-notifications">
          <Notifications listNotifications={listNotifications}  /> 
        </div>
      </div>
        <div className="App">
          {isLoggedIn ? 
          <BodySectionWithMarginBottom title="Course list">
            <CourseList listCourses={listCourses}/>
          </BodySectionWithMarginBottom>
          : 
          <BodySectionWithMarginBottom title="Log in to continue">
            <Login />
          </BodySectionWithMarginBottom> }
          <BodySection title="News from the School">
            <p>Breaking news! We have rebranded!</p>
          </BodySection>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => null, // default value for func is 'empty'
}

export default App;
