let username;
let socketId;
let activeChatboxes = [];
let roomId = "cars";

const getUsername = () => {
  return username;
};

const setUsername = (name) => {
  username = name;
};

const getSocketId = () => {
  return socketId;
};

const setSocketId = (id) => {
  socketId = id;
};

const getActiveChatboxes = () => {
  return activeChatboxes;
};

const setActiveChatboxes = (chatboxes) => {
  activeChatboxes = chatboxes;
};

const setRoomId = (id) => {
  roomId = id;
};

const getRoomId = () => {
  return roomId;
};

export default {
  getUsername,
  setUsername,
  getSocketId,
  setSocketId,
  getActiveChatboxes,
  setActiveChatboxes,
  setRoomId,
  getRoomId,
};
