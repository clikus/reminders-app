import * as React from 'react';
import { useContext, useCallback } from 'react';

import { styled } from 'styletron-react';
import { TaskActionsContext } from './TaskActionsContext';
import { TaskContext } from './TaskContext';

const TaskNameContainer = styled('div', {
  textAlign: 'left',
  color: 'black',
});

const TaskNameForm = styled('form', {
  display: 'flex',
  alignItems: 'center',
});

const TaskCheckbox = styled('input', {
  paddingRight: '20px',
  width: '20px',
  height: '20px',
});

const TaskLabel = styled('label', {
  fontSize: '22px',
  paddingLeft: '16px',
});

export function TaskName(): JSX.Element | null {
  const taskContext = useContext(TaskContext);
  const actions = useContext(TaskActionsContext);

  const onToggleCheckbox = useCallback(() => {
    if (actions === null || taskContext === null) {
      return;
    }

    const {
      index,
      task: {
        name,
        place,
        isFinished,
      },
    } = taskContext;

    actions.edit(index, { name, place, isFinished: !isFinished });
  }, [actions, taskContext]);

  if (taskContext === null) {
    return null;
  }

  const { task } = taskContext;

  return (
    <TaskNameContainer>
      <TaskNameForm>
        <TaskCheckbox type="checkbox" name="taskBox" onChange={onToggleCheckbox} checked={!!task.isFinished} />
        <TaskLabel>
          {`${task.name}(${task.place})`}
        </TaskLabel>
      </TaskNameForm>
    </TaskNameContainer>
  );
}
