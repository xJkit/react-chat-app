import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Other reducers are imported below
import message from './messageReducer';
import users from './users';

const rootReducers = combineReducers({
  routing: routerReducer,
  message,
  users,
});

export default rootReducers;
