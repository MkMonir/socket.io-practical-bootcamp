import store from './store.js';
import ui from './ui.js';
import socketHandler from './socketHandler.js';

const nameInput = document.querySelector('.introduction_page_name_input');

nameInput.addEventListener('keyup', (event) => {
  store.setUsername(event.target.value);
});

const roomSelect = document.getElementById('room_select');
roomSelect.addEventListener('change', (event) => {
  console.log('room changed');
  console.log(event.target.value);
  store.setRoomId(event.target.value);
});

const chatPageButton = document.getElementById('enter_chats_button');
chatPageButton.addEventListener('click', () => {
  // go to chat page
  ui.goToChatPage();
  socketHandler.connectToSocketIoServer();
});
