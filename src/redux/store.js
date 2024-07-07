import dialoguesReducer from "./dialogues-reducer";
import newsPageReducer from "./newsPage-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, words: "Hi! How are you?", likesCount: 45 },
        { id: 2, words: "Im in love with men", likesCount: 140 },
        { id: 3, words: "Fuck you, I'm genius", likesCount: 1 },
      ],
      newPostText: "",
    },

    dialoguesPage: {
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
      newMessageBody: "",
    },
    newsPage: {},
  },
  _callSubscriber() {
    console.log("State changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialoguesPage = dialoguesReducer(
      this._state.dialoguesPage,
      action
    );
    this._state.newsPage = newsPageReducer(this._state.newsPage, action);

    this._callSubscriber(this._state);
  },
};

export default store;
