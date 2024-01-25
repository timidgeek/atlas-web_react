import * as notificationData from '../../notifications.json';

const getAllNotificationsByUser = (userId) => {
  // filter the notifications based on the author id
  return notificationData.default.filter((notification) => notification.author.id === userId);
};

export default getAllNotificationsByUser;