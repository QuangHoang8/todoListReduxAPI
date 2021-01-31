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
