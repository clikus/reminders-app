import React from "react";

import { EDButtons } from './EDButtons';

export function TaskActions(props){
  const { task, index, editTask, deleteTask } = props;

  return (
  <div className="task-buttons">
    <EDButtons task={task} index={index} editTask={editTask} deleteTask={deleteTask}/>
  </div>
  );
}
