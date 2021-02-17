import { combineReducers } from "redux";
import { newTodoTask } from "./reducer/newTodoTask";
import { authReducer } from "./reducer/auth";
import { toDoList } from "./reducer/toDoList";
import { changeStatusToDoList } from "./reducer/newTodoTask";
import {
  expandNotCompleteReducer,
  expandCompleteReducer,
} from "./reducer/expand";

export default combineReducers({
  newTask: newTodoTask,
  auth: authReducer,
  toDoList: toDoList,
  statusTodoList: changeStatusToDoList,
  expandNotComplete: expandNotCompleteReducer,
  expandComplete: expandCompleteReducer,
});
