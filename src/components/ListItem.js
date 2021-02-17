import React from "react";
import TaskListItems from "./TaskListItems";
import classes from "./ListItem.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  setIsExpandNotComplete,
  setIsExpandComplete,
} from "../redux/actionCreator";

export default function ListItem({
  listName,
  renderedItem,
  onChangeCompleteStatus,
  onChangeFavoriteStatus,
}) {
  const isExpandNotComplete = useSelector(
    (state) => state.expandNotComplete.isExpand
  );
  const isExpandComplete = useSelector(
    (state) => state.expandComplete.isExpand
  );
  const dispatch = useDispatch();
  const changeExpand = (listName) => {
    listName === "Incompleted"
      ? dispatch(setIsExpandNotComplete(!isExpandNotComplete))
      : dispatch(setIsExpandComplete(!isExpandComplete));
  };
  return (
    <section className={classes.listTask}>
      <div className={classes.flex}>
        <h2>{listName}</h2>
        <input
          type="checkbox"
          id={listName}
          className={classes.checkbox}
          onChange={() => changeExpand(listName)}
        ></input>
        <label htmlFor={listName} className={classes.up}></label>
      </div>
      <ul>
        {renderedItem.map((task) => (
          <TaskListItems
            key={task.id}
            task={task}
            onChangeCompleteStatus={onChangeCompleteStatus}
            onChangeFavoriteStatus={onChangeFavoriteStatus}
          />
        ))}
      </ul>
    </section>
  );
}
