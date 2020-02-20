import React from 'react';

import { styled } from 'styletron-react';
import { TaskName } from './TaskName';
import { TaskActions } from './TaskActions';

const TaskItemContainer = styled('div', {
  padding: '20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export function TaskItem(): JSX.Element {
  return (
    <TaskItemContainer>
      <TaskName />
      <TaskActions />
    </TaskItemContainer>
  );
}
