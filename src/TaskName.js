import React from 'react';

import { styled } from 'styletron-react';

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

export function TaskName(props) {
  const { task, editTask , index} = props;

  function onToggleCheckbox() {
    editTask(index, { name:  task.name , place: task.place, isFinished : !task.isFinished});
  }

  return (
    <TaskNameContainer>
      <TaskNameForm>
        <TaskCheckbox type="checkbox" name="taskBox" onChange={onToggleCheckbox} checked={!!task.isFinished}/>
        <TaskLabel>{task.name}({task.place})</TaskLabel>
      </TaskNameForm>
    </TaskNameContainer>
  );
}
