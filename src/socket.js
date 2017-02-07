import { totalUsers } from 'actions/user';
import io from 'socket.io-client';
const SOCKETIO_ROOT = 'http://localhost:3000/chatroom';

const socket = io.connect(SOCKETIO_ROOT);
export default function ({ dispatch }) {
  socket.on('welcome', response => {
    console.log(response);
  });

  socket.on('onlineUsers', response => {
    console.log(`total users ${response} online`);
    dispatch(totalUsers(response));
  });
}
