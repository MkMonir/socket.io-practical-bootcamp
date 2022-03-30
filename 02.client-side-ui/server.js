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

io.on('connection', (socket) => {
  console.log(socket.id);

  socket.on('server', (msg) => console.log(msg));

  socket.emit('client', 'Hello Client');
});

const PORT = 5000 || process.env.PORT;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
