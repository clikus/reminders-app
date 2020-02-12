import React from "react";

import { TaskItem } from "./TaskItem";
import { styled } from 'styletron-react';

const TaskContainer = styled('div', {
    background: 'rgba(224, 224, 224, 0.699)',
    borderRadius: '5px'
})

export function TaskList (props){
  const { editTask, deleteTask, tasks } = props;

  return (
    <TaskContainer>
      { tasks.map((task,index) => 
        <TaskItem key={index} index={index} task={task} editTask={editTask} deleteTask={deleteTask}/>
      )}
    </TaskContainer>
  );
}
