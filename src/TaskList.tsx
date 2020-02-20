import React from 'react';

import { styled } from 'styletron-react';
import { TaskItem } from './TaskItem';
import { TaskContext } from './TaskContext';
import { Task } from './types';

const TaskContainer = styled('div', {
  background: 'rgba(224, 224, 224, 0.699)',
  borderRadius: '5px',
});

interface TaskListProps {
  tasks: Task[];
}

export function TaskList({ tasks }: TaskListProps): JSX.Element {
  return (
    <TaskContainer>
      { tasks.map((task, index) => {
        const item = {
          index,
          task,
        };

        return (
          <TaskContext.Provider key={index} value={item}>
            <TaskItem />
          </TaskContext.Provider>
        );
      })}
    </TaskContainer>
  );
}
