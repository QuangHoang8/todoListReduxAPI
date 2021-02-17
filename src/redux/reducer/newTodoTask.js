import { actionTypes } from "../actionTypes";
export const newTodoTask = (state = { nameTask: "" }, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_INPUT: {
      return { ...state, nameTask: action.payload.newTask };
    }
    default:
      return state;
  }
};
export const changeStatusToDoList = (
  state = { isLoading: true, isError: false, count: 0 },
  action
) => {
  switch (action.type) {
    case actionTypes.IS_LOADING: {
      console.log(action.payload.loadingStatus);
      return {
        ...state,
        isLoading: action.payload.loadingStatus,
      };
    }
    case actionTypes.IS_ERROR: {
      return {
        ...state,
        isError: action.payload.errorStatus,
      };
    }
    case actionTypes.LOADING_COUNT: {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    default:
      return state;
  }
};
