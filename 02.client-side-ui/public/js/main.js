const socket = io('/');

socket.on('connect', () => {
  console.log('Successfully connected' + socket.id);
});

socket.on('client', (msg) => {
  console.log(msg);

  socket.emit('server', 'Hello Server');
});
