import ui from "./ui.js";
import store from "./store.js";

let socket = null;

const connectToSocketIoServer = () => {
  socket = io("/");

  socket.on("connect", () => {
    console.log("Successfully connected" + socket.id);
    store.setSocketId(socket.id);
    registerActiveSession();
  });

  socket.on("group-chat-message", (data) => {
    ui.appendGroupChatMessage(data);
  });

  socket.on("active-peers", (data) => {
    ui.updateActiveChatboxes(data);
  });

  socket.on("direct-message", (data) => {
    ui.appendDirectChatMessage(data);
  });

  socket.on("peer-disconnected", (data) => {
    ui.removeChatboxOfDisconnectedPeer(data);
  });

  socket.on("room-message", (data) => {
    ui.appendRoomChatMessage(data);
  });
};

const registerActiveSession = () => {
  const userData = {
    username: store.getUsername(),
    roomId: store.getRoomId(),
  };

  socket.emit("register-new-user", userData);
};

const sendGroupChatMessage = (author, messageContent) => {
  const messageData = {
    author,
    messageContent,
  };

  socket.emit("group-chat-message", messageData);
};

const sendDirectMessage = (data) => {
  socket.emit("direct-message", data);
};

const sendRoomMessage = (data) => {
  socket.emit("room-message", data);
};

export default {
  connectToSocketIoServer,
  sendGroupChatMessage,
  sendDirectMessage,
  sendRoomMessage,
};
