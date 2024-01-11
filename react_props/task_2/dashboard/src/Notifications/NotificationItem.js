import React from 'react';
import './Notifications.css';

const NotificationItem = ({ type, html, value }) => {
  if (html) {
    return (
      <li data-priority={type} dangerouslySetInnerHTML={html}/>
    );
  }
  return (
    <li data-priority={type}>{value}</li>
  );
};

export default NotificationItem;