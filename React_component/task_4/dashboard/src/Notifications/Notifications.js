import React, { Component } from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    // only update if the new listNotifications has a longer list than the previous one
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }


  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`)
  };

  render() {
    // initialize props
    const { displayDrawer } = this.props;

    return (
      <React.Fragment>
        <div className="menuItem"><p>Your notifications</p></div>
        <div className={`Notifications${displayDrawer ? ' show' : ''}`} style={{ position: 'relative' }}>
          <p>Here is the list of notifications</p>
          <ul>
            <NotificationItem type="default" value="New course available"/>
            <NotificationItem type="urgent" value="New resume available"/>
            <NotificationItem type="urgent" html={{__html: getLatestNotification()}}/>
          </ul>
          <button
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              margin: '1rem',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer'}}
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

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;