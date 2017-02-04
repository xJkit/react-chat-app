import * as Types from './ActionTypes';

export const sendNewMessage = (user, message) => ({
  type: Types.SEND_NEW_MESSAGE,
  user,
  message,
});
