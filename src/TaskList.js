import React from "react";

import { TaskItem } from "./TaskItem";

export function TaskList (props){
  const { editTask, deleteTask, tasks } = props;

  return (
    <div className="task-list-container">
      { tasks.map((task,index) => 
        <TaskItem key={index} index={index} task={task} editTask={editTask} deleteTask={deleteTask}/>
      )}
    </div>
  );
}
