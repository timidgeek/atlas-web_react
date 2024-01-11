import React  from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';

function App({ isLoggedIn }) {
  return (
    <React.Fragment>
    <div className="App-header">
      <Header />
      <div className="Menu-notifications">
        <Notifications />
      </div>
    </div>
      <div className="App">
        {isLoggedIn ? <CourseList /> : <Login />}
        <Footer />
      </div>
    </React.Fragment>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
}

App.defaultProps = {
  isLoggedIn: false,
}

export default App;
