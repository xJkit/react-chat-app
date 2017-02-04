export const CALL_SOCKET = Symbol('call the socket');

const chatMiddleware = store => next => action => {
  if (!action[CALL_SOCKET]) {
    return next(action);
    console.log('pass a non-socket action');
  }
}
