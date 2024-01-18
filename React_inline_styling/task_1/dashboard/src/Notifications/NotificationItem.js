import React, { PureComponent } from 'react';
import './Notifications.css';
import PropTypes from 'prop-types';

// add React.memo to make component "pure", meaning
// it will only update when its props and state
// are different
class NotificationItem extends PureComponent {

  render() {
    const { id, type, html, value, markAsRead } = this.props;

    return html ? (
        <li data-priority={type} dangerouslySetInnerHTML={{ __html: html }} onClick={() => markAsRead(id)} />
      ) : (
      <li data-priority={type} onClick={() => markAsRead}>{value}</li>
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