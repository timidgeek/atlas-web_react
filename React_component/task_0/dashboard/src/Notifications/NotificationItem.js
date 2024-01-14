import React from 'react';
import './Notifications.css';
import PropTypes from 'prop-types';

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

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string,
  value: PropTypes.string,
};

NotificationItem.defaultProps = {
  type: 'default',
};

export default NotificationItem;