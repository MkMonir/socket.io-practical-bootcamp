const path = require('path');
const http = require('http');
const dotenv = require('dotenv');
const express = require('express');
const socketio = require('socket.io');

dotenv.config({ path: './config.env' });

const app = express();
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, 'public')));

const io = socketio(server);

let connectedPeers = [];

io.on('connection', (socket) => {
  socket.on('group-chat-message', (data) => {
    io.emit('group-chat-message', data);
  });

  socket.on('register-new-user', (userData) => {
    const { username } = userData;

    const newPeer = {
      username,
      socketId: socket.id,
    };

    connectedPeers = [...connectedPeers, newPeer];
  });

  socket.on('disconnect', () => {
    connectedPeers = connectedPeers.filter((peer) => peer.socketId !== socket.id);
  });
});

const PORT = 5000 || process.env.PORT;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
