import React, { PureComponent } from 'react';
import './Notifications.css';
import PropTypes from 'prop-types';

class NotificationItem extends PureComponent {

  render() {
    const { id, type, html, value, markAsRead } = this.props;

    return html ? (
        <li data-priority={type} dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)} />
      ) : (
      <li data-priority={type} onClick={() => markAsRead(id)}>{value}</li>
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
  html: null,
  value: '',
  markAsRead: () => {},
  id: NaN,
};

export default NotificationItem;