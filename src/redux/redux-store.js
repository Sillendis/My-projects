import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profile-reducer";
import dialoguesReducer from "./dialogues-reducer";
import newsPageReducer from "./newsPage-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";

let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialoguesPage: dialoguesReducer,
  newsPage: newsPageReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
});

let store = configureStore({ reducer: rootReducer });

window.store = store;

export default store;
