
  var socket = io();
  socket.on('connect',function() {
    console.log('Connected to server');
    socket.emit('createMessage', {
      from:'sailaja',
      text:'hey'
    });
  });
  socket.on('disconnect', function() {
    console.log('Disconnect');
  });
socket.on('newEmail',function(email){
  console.log('New Mail',email);
});
socket.on('newMessage',function(message){
  console.log('New message :',message);
});
