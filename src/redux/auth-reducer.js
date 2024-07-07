import { authAPI } from "../API/API";

const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  error: null, // Добавлено поле для хранения ошибок
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case "SET_AUTH_ERROR":
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

export const setAuthError = (error) => ({
  type: "SET_AUTH_ERROR",
  error,
});

export const getAuthUserData = () => async (dispatch) => {
  try {
    const response = await authAPI.me();
    if (response.data.resultCode === 0) {
      const { userId, login, email } = response.data.data;
      dispatch(setAuthUserData(userId, email, login, true));
    } else {
      dispatch(setAuthError("Failed to fetch user data"));
    }
  } catch (error) {
    console.error("Fetching user data error:", error);
    dispatch(setAuthError("Error fetching user data"));
  }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
  try {
    const response = await authAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      const message =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : "Some error";
      dispatch(setAuthError(message));
    }
  } catch (error) {
    console.error("Login error:", error);
    dispatch(setAuthError("Error during login"));
  }
};

export const logout = () => async (dispatch) => {
  try {
    const response = await authAPI.logout();
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  } catch (error) {
    dispatch(setAuthError("Error during logout"));
  }
};

export default authReducer;
