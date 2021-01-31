import { actionTypes } from "../actionTypes";

export const updateToDo = (state = { todos: [] }, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_TODOLIST: {
      return {
        ...state,
        todos: action.payload.newTodoList,
      };
    }
    default:
      return state;
  }
};
