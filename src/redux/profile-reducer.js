import { usersAPI } from "../API/API";
import { profileAPI } from "../API/API";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const REMOVE_POST = "REMOVE_POST";

let initialState = {
  posts: [
    { id: 1, words: "Hi! How are you?", likesCount: 45 },
    { id: 2, words: "Im in love with men", likesCount: 140 },
    { id: 3, words: "Fuck you, I'm genius", likesCount: 1 },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.posts.length + 1,
        words: action.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };

    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    default:
      return state;
  }
};

export const addPostCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});

export const removePostCreator = (newPostText) => ({
  type: REMOVE_POST,
  newPostText,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile: profile,
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const getUserProfile = (userId) => async (dispatch) => {
  try {
    const response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
  } catch (error) {
    console.error("Error fetching profile:", error);
  }
};

export const getStatus = (userId) => async (dispatch) => {
  try {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
  } catch (error) {
    console.error("Error fetching status:", error);
  }
};

export const updateStatus = (status) => async (dispatch) => {
  try {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  } catch (error) {
    console.error("Error updating status:", error);
  }
};

export default profileReducer;
