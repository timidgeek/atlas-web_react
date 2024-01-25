import * as notificationData from '../../notifications.json';
import { schema } from 'normalizr';

// new entities
const user = new schema.Entity("users")
const  message = new schema.Entity("messages", {}, {  idAttribute: 'guid' } )
const notification = new schema.Entity("notifications", {
  author: user,
  context: message
})

const getAllNotificationsByUser = (userId) => {
  // filter the notifications based on the author id
  return notificationData.default.filter((notification) => notification.author.id === userId).map(notification  => notification.context);
};

export { getAllNotificationsByUser, notification };