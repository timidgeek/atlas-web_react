import React from 'react';
import './Notifications.css';

const NotificationItem = ({ type, html, value }) => {
  if (html) {
    return (
      <li data-notification-type={type} dangerouslySetInnerHTML={html}/>
    );
  }
  return (
    <li data-notification-type={type}>{value}</li>
  );
};

export default NotificationItem;