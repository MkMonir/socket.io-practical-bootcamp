import ui from './ui.js';
import store from './store.js';

let socket = null;

const connectToSocketIoServer = () => {
  socket = io('/');

  socket.on('connect', () => {
    console.log('Successfully connected' + socket.id);
  });

  socket.on('group-chat-message', (data) => {
    ui.appendGroupChatMessage(data);
  });
};

const sendGroupChatMessage = (author, messageContent) => {
  const messageData = {
    author,
    messageContent,
  };

  socket.emit('group-chat-message', messageData);
};

export default {
  connectToSocketIoServer,
  sendGroupChatMessage,
};
