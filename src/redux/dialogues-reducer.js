const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  dialogues: [
    { id: 1, name: "Klim Sranich" },
    { id: 2, name: "Maria" },
    { id: 3, name: "Goblin" },
    { id: 4, name: "Sashyula Chernii" },
    { id: 5, name: "Misha" },
    { id: 6, name: "Gleb" },
  ],
  messages: [
    { id: 1, words: "Hi, dirty pig!" },
    { id: 2, words: "How is your vodochka and seliodochka?" },
    { id: 3, words: "Ia vas kategoricheski privetstvuiu" },
    { id: 4, words: "Prodavati orujie tema!" },
    { id: 5, words: "Baza" },
    { id: 6, words: "Zalchik, turnichok)" },
  ],
};

const dialoguesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newBody = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 7, words: newBody }],
      };

    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default dialoguesReducer;
