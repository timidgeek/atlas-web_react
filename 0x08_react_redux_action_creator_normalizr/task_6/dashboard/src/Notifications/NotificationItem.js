import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends PureComponent {

  render() {
    const { id, type, html, value, markAsRead } = this.props;
    const dynamicStyles = type === 'urgent' ? styles.urgentPriority : styles.defaultPriority;

    return html ? (
        <li 
        data-priority={type} 
        dangerouslySetInnerHTML={html} 
        onClick={() => markAsRead(id)}
        className={css(styles.notificationItem, dynamicStyles)}
        />
      ) : (
        <li
          data-priority={type} 
          onClick={() => markAsRead(id)}
          className={css(styles.notificationItem, dynamicStyles)}
        >
          {value}
        </li>
    );
  };
}

// PROP TYPES

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

// APHRODITE STYLES

const styles = StyleSheet.create({
  closeButton: {
    position: 'absolute',
    top: '0',
    right: '0',
    margin: '1rem',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer'
  },

  notifications: {
    backgroundColor: '#FFF',
    border: '2px #6A7AC0 dashed',
    padding: '1rem',
    fontFamily: 'Arial, Helvetica, sans-serif',
    width: '100%',
    marginBottom: '5px',
    marginRight: '1rem',
    position: 'relative',
  },

  notificationItem: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    '@media (max-width: 900px)': {
      fontSize: '20px',
      listStyle: 'none',
      borderBottom: '2px solid black',
      padding: '10px 8px',
      width: '100%',
    }
  },

  hideNotifications: {
    /* styles for when displayDrawer is false */
    display: 'none',
  },

  showNotifications: {
    /* styles for when displayDrawer is true */
    display: 'block',
  },
  
  defaultPriority: {
    color: 'blue',
  },
  
  urgentPriority: {
    color: 'red',
  },
  
  menuItem: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    marginRight: '1rem',
  },
  
})

export default NotificationItem;