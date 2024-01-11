import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

function Notifications({ displayDrawer }) {
  return (
    <div className={`Notifications${displayDrawer ? ' show' : ''}`} style={{ position: 'relative' }}>
      <div className="menuItem">Your notifications</div>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available"/>
        <NotificationItem type="urgent" value="New resume available"/>
        <NotificationItem type="urgent" html={{__html: getLatestNotification()}}/>
      </ul>
      <button
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          margin: '1rem',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer'}}
        aria-label="Close"
        onClick={() => console.log('Close button has been clicked')}>
          <img src={closeIcon} 
          alt="Close"
          style={{width: '1rem', height: '1rem'}} />
      </button>
    </div>
  );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

export default Notifications;