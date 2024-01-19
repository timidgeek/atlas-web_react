import React, { Component } from 'react';
import closeIcon from './close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
    this.renderCount = NaN;
  }

  shouldComponentUpdate(nextProps) {
    // only update if the new listNotifications has a longer list than the previous one
    // !! to ensure boolean value
    return !!(
      nextProps.listNotifications &&
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`)
  };

  render() {
    // initialize props
    const { displayDrawer } = this.props;
    // increment renderCount on every render
    this.renderCount = isNaN(this.renderCount) ? 1 : this.renderCount + 1;


    return (
      <React.Fragment>
        <div className="menuItem"><p>Your notifications</p></div>
        <div className={`Notifications${displayDrawer ? ' show' : ''}`} style={{ position: 'relative' }}>
          <p>Here is the list of notifications</p>
          <ul>
            <NotificationItem 
              type="default" 
              value="New course available"
              className={css(styles.defaultPriority)}
              />
            <NotificationItem 
              type="urgent" 
              value="New resume available"
              className={css(styles.urgentPriority)}
              />
            <NotificationItem 
              type="urgent" 
              html={{__html: getLatestNotification()}}
              className={css(styles.urgentPriority)}
              />
          </ul>
          <button
            className={css(styles.closeButton)}
            aria-label="Close"
            onClick={() => console.log('Close button has been clicked')}>
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
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
};

Notifications.defaultProps = {
  displayDrawer: false,
  html: null,
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
    width: '100',
    marginBottom: '5px',
    marginRight: '1rem',
  
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

export default Notifications;