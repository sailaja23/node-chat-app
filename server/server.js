const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
var app = express();

var server = http.createServer(app);
var io = socketIO(server);
app.use(express.static(publicPath));


io.on('connection', (socket) =>{
  console.log('New user connected');

  socket.emit('newMessage',{
    from: '@gmail.com',
    text: 'wow',
    createAt: 42343223
  });
  socket.on('createMessage', (message) => {
    console.log('create Message called',message);
  });
  socket.on('disconnect', () => {
    console.log('Disconnect User was');
  });

socket.on('newMessage', (message) => {
  console.log('newMessage',message);
});
});
server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
