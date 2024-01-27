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
  const { entities, result } = normalizedData;

  // check if notifications are present and result is valid
  const userNotificationIds = entities.notifications && entities.notifications[result]
  ? Object.values(entities.notifications[result]).filter((notificationId) =>
      entities.notifications[notificationId].author === 
        userId) : [];

  // extract context from each notification
  const contextArray = userNotificationIds.map((notificationId) =>
    entities.messages[entities.notiications[notificationId].context]);

  return contextArray;

  // filter the notifications based on the author id
  // return normalizedData.default.filter((notification) => notification.author.id === userId).map(notification  => notification.context);
};

export { getAllNotificationsByUser, notification };