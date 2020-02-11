import React from "react";

import { TaskName } from "./TaskName";
import { TaskActions } from "./TaskActions";

export class TaskItem extends React.Component {
  render() {
    const { task, index, editTask, deleteTask } = this.props;

    return (
      <div className="task-item-container">
        <TaskName task={task} index={index} editTask={editTask} />
        <TaskActions task={task} index={index} editTask={editTask} deleteTask={deleteTask}/>
      </div>
    );
  }
}