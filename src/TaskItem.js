import React from "react";

import { TaskName } from "./TaskName";
import { TaskActions } from "./TaskActions";

export function TaskItem(props) {
  const { task, index, editTask, deleteTask } = props;

  return (
    <div className="task-item-container">
      <TaskName task={task} index={index} editTask={editTask} />
      <TaskActions task={task} index={index} editTask={editTask} deleteTask={deleteTask} />
    </div>
  );
}
