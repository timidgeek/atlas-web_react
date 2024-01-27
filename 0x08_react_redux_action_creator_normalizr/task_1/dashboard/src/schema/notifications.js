import * as notificationData from '../../notifications.json';
import { normalize, schema } from 'normalizr';

// new entities
const user = new schema.Entity("users")
const  message = new schema.Entity("messages", {}, {  idAttribute: 'guid' } )
const notification = new schema.Entity("notifications", {
  author: user,
  context: message
})

// normalize the data
const normalizedData = normalize(notificationData.default, [notification]);

const getAllNotificationsByUser = (userId) => {
  // extract normalied entities and result
  const { entities } = normalizedData;

  // check if notifications are present and result is valid
  const notificationId = Object.values(entities.notifications || {});
  const userNotifications = notificationId.filter((notification) =>
      entities.users[notification.author].id === 
        userId);

  // extract context from each notification
  const contextArray = userNotifications.map((notification) => {
    const messageData = entities.messages[notification.context];
    return {
      guid: messageData.guid,
      isRead: messageData.isRead,
      type: messageData.type,
      value: messageData.value
    };
  });
  return contextArray;

  // filter the notifications based on the author id
  // return normalizedData.default.filter((notification) => notification.author.id === userId).map(notification  => notification.context);
};

export { getAllNotificationsByUser, notification };