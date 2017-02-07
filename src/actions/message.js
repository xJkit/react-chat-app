import * as Types from './ActionTypes';

export const sendMyMessage = message => ({
  type: Types.MY_MESSAGE,
  message,
});

export const sendOtherMessage = (userId, message) => ({
  type: Types.OTHER_MESSAGE,
  userId,
  message,
});
