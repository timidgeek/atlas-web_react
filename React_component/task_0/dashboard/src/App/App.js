// imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';


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

  // render method to handle jsx rendering
  render() {
    // initialize props
    const { listCourses, listNotifications, isLoggedIn } = this.props;

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
          {isLoggedIn ? <CourseList listCourses={listCourses}/> : <Login />}
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
}

App.defaultProps = {
  isLoggedIn: false,
}

export default App;
