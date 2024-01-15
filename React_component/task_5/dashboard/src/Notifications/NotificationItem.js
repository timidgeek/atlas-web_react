import React, { PureComponent } from 'react';
import './Notifications.css';
import PropTypes from 'prop-types';

// add React.memo to make component "pure", meaning
// it will only update when its props and state
// are different
class NotificationItem extends PureComponent {

  render() {
    const handleClick = () => {
      this.props.markAsRead(this.props.id);
    };

    const { type, html, value, markAsRead } = this.props;

    if (html) {
      
      return (
        <li data-priority={type} dangerouslySetInnerHTML={html} onClick={handleClick} />
      );
    }
    return (
      <li data-priority={type} onClick={handleClick}>{value}</li>
    );
  };
}

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
  type: 'default',
  html: {},
  value: '',
  markAsRead: () => {},
  id: NaN,
};

export default NotificationItem;