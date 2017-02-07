import * as Types from 'actions/ActionTypes';

const initialState = {
  onlineUserNumbers: 0,
  onlineUserIds: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.TOTAL_USER_NUMBER:
      return {
        ...state,
        onlineUserNumber: action.users,
      };
    case Types.USER_LOG_IN:
      return {
        ...state,
        onlineUserIds: action.userId,
      };
    default:
      return state;
  }
};

export default usersReducer;
