import { actionTypes } from "./actionTypes";

export const changeHeaderInputValue = (newTask) => {
  return {
    type: actionTypes.CHANGE_INPUT,
    payload: {
      newTask,
    },
  };
};

export const changeEmailInputValue = (newEmail) => {
  return {
    type: actionTypes.CHANGE_EMAIL,
    payload: {
      newEmail,
    },
  };
};

export const changePasswordInputValue = (newPassword) => {
  return {
    type: actionTypes.CHANGE_PASSWORD,
    payload: {
      newPassword,
    },
  };
};

export const login = () => ({
  type: actionTypes.LOGIN,
  payload: {},
});

export const logout = () => ({
  type: actionTypes.LOGOUT,
  payload: {},
});
export const updateToDoList = (newTodoList) => ({
  type: actionTypes.UPDATE_TODOLIST,
  payload: {
    newTodoList,
  },
});

export const setIsLoading = (loadingStatus) => ({
  type: actionTypes.IS_LOADING,
  payload: {
    loadingStatus,
  },
});
export const setIsError = (errorStatus) => ({
  type: actionTypes.IS_ERROR,
  payload: {
    errorStatus,
  },
});
export const setCount = () => ({
  type: actionTypes.LOADING_COUNT,
  payload: {},
});
export const setIsExpandNotComplete = (expandStatus) => ({
  type: actionTypes.IS_EXPAND_NOT_COMPLETE,
  payload: {
    expandStatus,
  },
});
export const setIsExpandComplete = (expandStatus) => ({
  type: actionTypes.IS_EXPAND_COMPLETE,
  payload: {
    expandStatus,
  },
});
