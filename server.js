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
io.on('connection', socket => {
  // user socket to listen to the front end events
  console.log('a user connected');

  socket.on('createMsg', msg => {
    // console.log(`name: ${msg.name}`);
    // console.log(`text: ${msg.text}`);
    console.log(`got messages, ${msg.name}: ${msg.text}`);
    socket.emit('newMsg', {
      name: msg.name,
      text: msg.text,
      createdAt: new Date(),
    });
  });

  socket.on('disconnect', () => {
    console.log('a user disconnected');
  });
});


server.listen(PORT, ADDR, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Server fires up at ${ADDR}:${PORT}`);
});
