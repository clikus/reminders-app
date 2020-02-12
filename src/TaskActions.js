import React from "react";

import { EDButtons } from './EDButtons';
import { styled } from 'styletron-react';

const TaskButtons = styled('div', {
  textAlign: 'right',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around'
});

export function TaskActions(props){
  const { task, index, editTask, deleteTask } = props;

  return (
  <TaskButtons>
    <EDButtons task={task} index={index} editTask={editTask} deleteTask={deleteTask}/>
  </TaskButtons>
  );
}
