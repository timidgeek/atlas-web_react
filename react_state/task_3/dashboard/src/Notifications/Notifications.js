import React, { PureComponent } from 'react';
import closeIcon from './close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
class Notifications extends PureComponent {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
    this.renderCount = NaN;
  }

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
    this.props.markNotificationAsRead(id);
  };

  render() {
    // initialize props
    const { 
      displayDrawer, 
      handleDisplayDrawer, 
      handleHideDrawer, 
      listNotifications,
      markNotificationAsRead } = this.props;

    // increment renderCount on every render
    this.renderCount = isNaN(this.renderCount) ? 1 : this.renderCount + 1;
    
    // handle menu visibility
    const menuVisibility = displayDrawer ? css(styles.noMenuItem) : css(styles.menuItem);

    return (
      <React.Fragment>
        <div className={menuVisibility} data-testid="menuItem">
          <p 
            onClick={handleDisplayDrawer}
            className={css(styles.notificationsHeader)}>
              Your notifications
          </p>
        </div>
        <div className={css(styles.notifications, displayDrawer ? styles.showNotifications : styles.hideNotifications)}
             data-testid="notifications">
          <p>Here is the list of notifications</p>
          <ul className={css(styles.noStyle)}>
            {listNotifications && listNotifications.length === 0 ? (
                    <NotificationItem value='No new notifications for now' />
                  ) : (
                    listNotifications.map(notification => (
                      <NotificationItem
                        key={notification.id}
                        type={notification.type}
                        value={notification.value}
                        html={notification.html}
                        markAsRead={() => markNotificationAsRead(notification.id)}
                      />
                    ))
                  )}
          </ul>
          <button
            data-testid="closeButton"
            className={css(styles.closeButton)}
            aria-label="Close"
            onClick={handleHideDrawer}>
              <img src={closeIcon} 
              alt="Close"
              style={{width: '1rem', height: '1rem'}} />
          </button>
        </div>
      </React.Fragment>
    );
  }
}

// PROP TYPES

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  html: PropTypes.shape({
    __html: PropTypes.string,
  markNotificationAsRead: PropTypes.func,
  }),
};

Notifications.defaultProps = {
  displayDrawer: false,
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  html: null,
  listNotifications: []
};

// ANIMATIONS

const fadeIn = {
  'from': {
      opacity: 0.5,
    },
    'to': {
      opacity: 1,
    },
  }

const bounce = {
    '0%': {
      transform: 'translateY(0)',
    },
    '20%': {
      transform: 'translateY(-5px)',
    },
    '40%': {
      transform: 'translateY(5px)',
    },
  }

// APHRODITE STYLES

const styles = StyleSheet.create({
  noStyle: {
    listStyle: 'none'
  },

  closeButton: {
    position: 'absolute',
    top: '0',
    right: '0',
    margin: '1rem',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    zIndex: '1000 !important',
    '@media (max-width: 900px)': {
      right: '2rem',
    }
  },

  notifications: {
    backgroundColor: '#FFF',
    border: '2px #6A7AC0 dashed',
    padding: '1rem',
    fontFamily: 'Arial, Helvetica, sans-serif',
    marginBottom: '5px',
    marginRight: '1rem',
    marginTop: '1rem',
    display: 'relative',
    '@media (max-width: 900px)': {
      fontSize: '20px',
      listStyle: 'none',
      border: 'none',
      position: 'fixed',
      overflowY: 'auto',
      marginTop: '0',
      left: '0',
      width: '100vw',
      height: '100vh',
      zIndex: '998',
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
    cursor: 'pointer',
    ':hover': {
      animationName: [fadeIn, bounce],
      animationDuration: '2s, 0.5s',
      animationIterationCount: [1, 3],
      animationTimingFunction: 'ease-in-out',
    },
  },

  noMenuItem: {
    display: 'none',
  },

  notificationsHeader: {
    '@media (max-width: 900px)': {
      top: '0',
      whiteSpace: 'nowrap',
    },
  },
})

export default Notifications;