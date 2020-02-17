import React, { useContext, useCallback } from 'react';

import { styled } from 'styletron-react';
import { TaskActionsContext } from './TaskActionsContext';
import { TaskContext } from './TaskContext';

const TaskNameContainer = styled('div', {
  textAlign: 'left',
  color: 'black'
});

const TaskNameForm = styled('form', {
  display: 'flex',
  alignItems: 'center'
});

const TaskCheckbox = styled('input', {
  paddingRight: '20px',
  width: '20px',
  height: '20px'
});

const TaskLabel = styled('label', {
  fontSize: '22px',
  paddingLeft: '16px'
});



export function TaskName() {
  const { task, index} = useContext(TaskContext);

  const actions = useContext(TaskActionsContext);

  const onToggleCheckbox = useCallback(() => {
    actions.edit(index, { name:  task.name , place: task.place, isFinished : !task.isFinished});
  }, [actions, index, task]);

  return (
    <TaskNameContainer>
      <TaskNameForm>
        <TaskCheckbox type="checkbox" name="taskBox" onChange={onToggleCheckbox} checked={!!task.isFinished}/>
        <TaskLabel>{task.name}({task.place})</TaskLabel>
      </TaskNameForm>
    </TaskNameContainer>
  );
}
