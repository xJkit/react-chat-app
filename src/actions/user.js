import * as Types from './ActionTypes';

export const totalUsers = users => ({
  type: Types.TOTAL_USER_NUMBER,
  users,
});

export const userLogIn = userId => ({
  type: Types.USER_LOG_IN,
  userId,
});
