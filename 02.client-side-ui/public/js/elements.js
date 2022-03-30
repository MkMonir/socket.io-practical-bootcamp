const getChatbox = (data) => {
  const { chatboxLabel, chatboxMessagesId, chatboxInputId, chatboxId } = data;

  const chatboxContainer = document.createElement("div");
  chatboxContainer.classList.add("chatbox_container");
  chatboxContainer.setAttribute("id", chatboxId);

  chatboxContainer.innerHTML = `
    <div class='chatbox_label_container'>
        <p class='chatbox_label'>${chatboxLabel}</p>
    </div>
    <div class='messages_container' id='${chatboxMessagesId}'>
    </div>
    <div class='new_message_input_container'>
        <input class='new_message_input' id='${chatboxInputId}' placeholder="Type your message .."></input>
    </div>
    `;

  return chatboxContainer;
};

const getGroupChatMessage = (data) => {
  const { author, messageContent } = data;
  const messageContainer = document.createElement("div");
  messageContainer.classList.add("message_container");
  messageContainer.innerHTML = `
    <p class='message_paragraph'>
        <span class='message_author'>${author}: </span>${messageContent}
    </p>
    `;

  return messageContainer;
};

const getDirectChatMessage = (data) => {
  const { messageContent, alignRight } = data;
  const messageContainer = document.createElement("div");

  const messageClass = alignRight ? "message_right" : "message_left";

  messageContainer.innerHTML = `<p class='${messageClass}'>${messageContent}</p>`;
  return messageContainer;
};

export default {
  getChatbox,
  getGroupChatMessage,
  getDirectChatMessage,
};
