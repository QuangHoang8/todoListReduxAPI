import { combineReducers } from "redux";
import { newTodoTask } from "./reducer/newTodoTask";
import { authReducer } from "./reducer/auth";
import { updateToDo } from "./reducer/updateToDoList";
import { changeStatus } from "./reducer/status";

export default combineReducers({
  newTask: newTodoTask,
  auth: authReducer,
  updateTodo: updateToDo,
  status: changeStatus,
});
