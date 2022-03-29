const path = require('path');
const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

const PORT = 3000;
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log(socket.id);
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
