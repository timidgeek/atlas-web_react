import React from 'react';
import './Notifications.css';
import PropTypes from 'prop-types';

// add React.memo to make component "pure", meaning
// it will only update when its props and state
// are different
const NotificationItem = React.memo({ type, html, value, markAsRead }) => {
  const handleClick = () => {
    markAsRead();
  };

  if (html) {
    return (
      <li data-priority={type} dangerouslySetInnerHTML={html} onClick={handleClick} />
    );
  }
  return (
    <li data-priority={type} onClick={handleClick}>{value}</li>
  );
};

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: 'default',
};

export default NotificationItem;