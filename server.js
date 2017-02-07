/* eslint no-console: 0 */
const app = require('express')();
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');
const server = http.createServer(app);
const io = socketIO(server);
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackDevMiddleware = require('webpack-dev-middleware');

const ADDR = 'localhost';
const PORT = process.env.PORT || 3000;

//
const compiler = webpack(webpackConfig);

// app.use(express.static('public/dist'));
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    color: true,
  },
}));

app.use(webpackHotMiddleware(compiler));

// Add socket.io

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// create socket events
const chatNsp = io.of('/chatroom');
let users = 0;
chatNsp.on('connection', socket => {
  // user socket to listen to the front end events
  console.log(`new user connected to the server with ${users} online`);
  users ++;
  socket.emit('welcome', '歡迎光臨');
  socket.broadcast.emit('onlineUsers', users);

  socket.on('disconnect', () => {
    console.log('a user disconnected');
    users --;
    socket.broadcast.emit('onlineUsers', users);
  });
});


server.listen(PORT, ADDR, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Server fires up at ${ADDR}:${PORT}`);
});
