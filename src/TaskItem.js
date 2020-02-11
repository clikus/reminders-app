import React from 'react';

import { TaskName } from './TaskName';
import { TaskActions } from './TaskActions';
import { styled } from 'styletron-react';

const TaskItemContainer = styled('div', {
  padding: '20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
});

export function TaskItem(props) {
  const { task, index, editTask, deleteTask } = props;

  return (
    <TaskItemContainer>
      <TaskName task={task} index={index} editTask={editTask} />
      <TaskActions task={task} index={index} editTask={editTask} deleteTask={deleteTask} />
    </TaskItemContainer>
  );
}
