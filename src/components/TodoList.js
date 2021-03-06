import React, { useEffect } from "react";
import _ from "lodash";
import CompleteTask from "./CompleteTask";
import Header from "./Header";
import Loading from "./Loading";
import TaskList from "./TaskList";
import ReloadButton from "./Reload";
import { getTodo, markTaskComplete, markTaskFavorite } from "./TodoService";
// import { Redirect, useHistory } from "react-router-dom";
import style from "./TodoList.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  logout,
  updateToDoList,
  setIsLoading,
  setIsError,
  setCount,
} from "../redux/actionCreator";

export default function TodoList() {
  const taskList = useSelector((state) => state.toDoList.todos);
  const isLoadingToDoList = useSelector(
    (state) => state.statusTodoList.isLoading
  );
  const isErrorToDoList = useSelector((state) => state.statusTodoList.isError);
  const loadingCount = useSelector((state) => state.statusTodoList.count);
  const isExpandNotComplete = useSelector(
    (state) => state.expandNotComplete.isExpand
  );
  const isExpandComplete = useSelector(
    (state) => state.expandComplete.isExpand
  );
  const convertDate = (time) => new Date(time).getTime();
  // const history = useHistory();
  const currentUser = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const asyncFunc = async () => {
      try {
        const response = await getTodo();
        dispatch(
          updateToDoList(
            response.map((task) => {
              return {
                ...task,
                createdDate: convertDate(task.createdDate),
                completedDate: convertDate(task.completedDate),
                // isFavorite: task.isFavorite ? 1 : 0,
              };
            })
          )
        );
        dispatch(setIsError(false));
        dispatch(setIsLoading(false));
      } catch (err) {
        console.log(err);
        dispatch(setIsError(true));
      } finally {
        dispatch(setIsLoading(false));
      }
    };

    asyncFunc();
  }, [loadingCount, dispatch]);

  const [completedList, incompletedList] = _.partition(
    taskList,
    (e) => e.isCompleted
  );

  const handleChangeCompleteStatus = async (taskId, newStatus) => {
    try {
      dispatch(setIsLoading(true));
      dispatch(setIsError(false));
      await markTaskComplete(taskId, newStatus);
      dispatch(setCount());
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  const handleChangeFavoriteStatus = async (taskId, newStatus) => {
    try {
      dispatch(setIsLoading(true));
      dispatch(setIsError(false));
      await markTaskFavorite(taskId, newStatus);
      dispatch(setCount());
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  const renderContent = () => {
    return isLoadingToDoList ? (
      <Loading />
    ) : (
      <div className={style.todoList}>
        <Header onChangeLoading={setLoadingCount} userName={currentUser.name} />

        <TaskList
          incompletedList={isExpandNotComplete ? incompletedList : ""}
          onChangeCompleteStatus={handleChangeCompleteStatus}
          onChangeFavoriteStatus={handleChangeFavoriteStatus}
        />
        <CompleteTask
          completedList={isExpandComplete ? completedList : ""}
          onChangeCompleteStatus={handleChangeCompleteStatus}
          onChangeFavoriteStatus={handleChangeFavoriteStatus}
        />
        <button onClick={() => dispatch(logout())}>Log out</button>
      </div>
    );
  };

  const setLoadingCount = () => {
    dispatch(setIsError(false));
    dispatch(setIsLoading(true));
    dispatch(setCount());
  };

  const renderErrorContent = () => {
    return (
      <div>
        <div>"Error"</div>
        <ReloadButton onClick={setLoadingCount()} />
      </div>
    );
  };

  return isErrorToDoList ? renderErrorContent() : renderContent();
}
