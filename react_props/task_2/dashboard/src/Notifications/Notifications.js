import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

function Notifications() {
  return (
    <div className="Notifications" style={{ position: 'relative' }}>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem data-priority="default" value="New course available"/>
        <NotificationItem data-priority="urgent" value="New resume availabl"/>
        <NotificationItem data-priority="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification()}}/>
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
}

export default Notifications;