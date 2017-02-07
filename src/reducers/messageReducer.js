import * as Types from 'actions/ActionTypes';
const initialState = {
  userList: [],
};

function messageReducer(state = initialState, action) {
  switch (action.type) {
    case Types.ADD_NEW_USER:
      return {
        ...state,
        userList: [
          ...state.userList,
          action.userId,
        ],
      };
    default:
      return state;
  }
}

export default messageReducer;
