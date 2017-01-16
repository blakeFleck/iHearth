var express = require('express');
var bodyParser = require('body-parser');
var businessRouter = require('./resources/business/businessRouter.js');

// Create express app
var app = express();
// var server = require('http').Server(app);
// var io = require('socket.io')(server);
var io = require('socket.io').listen(69);

// app.use(express.static('socket.io'));

// socket to signal when we have scanned a qr code
// io.on('connection', (socket) => {
//   console.log('A client just joined on', socket.id);
//   // socket.emit(user_qrcode, 'qrcode');
//   // socket.on('qrcode', (message) => {
//   // });
// });
io.sockets.on('connection', (socket) => {
  socket.on('qrcode', (name, fn) => {
    fn({data: 'some random data'});
  });
});


// setInterval(() => {
//   var msg = Math.random();
//   io.emit('qrcode1:1', msg);
//   console.log(msg);
// }, 1000);

// Attach middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(function(req, res, next) {
  res.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.set("Access-Control-Allow-Origin", "*");
  res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});

// Allow clientside access
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT");
  next();
});

// Attach business routes
app.use('/business', businessRouter);

module.exports = app;
