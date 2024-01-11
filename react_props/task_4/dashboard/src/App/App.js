import React, { useState } from 'react';import './App.css';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';

function App({ isLoggedIn = false }) {
  // initialize variable & function with useState
  // in order to manipulate the userLoggedIn state
  const [userLoggedIn, setUserLoggedIn] = useState(isLoggedIn);

  return (
    <React.Fragment>
      <Notifications />
      <div className="App">
        <Header />
        {userLoggedIn ? <CourseList /> : <Login />}
        <Login />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
