import * as React from 'react';
import { useContext, useCallback } from 'react';

import { styled } from 'styletron-react';
import { TaskActionsContext } from './TaskActionsContext';
import { TaskContext } from './TaskContext';

const EDButtonsContainer = styled('div', {
  padding: '20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const EditButton = styled('button', {
  marginLeft: '10px',
  backgroundColor: 'rgba(53, 117, 255, 0.938)',
  color: 'white',
  fontWeight: 'bold',
  borderRadius: '5px',
  width: '100px',
  padding: '0',
  borderWidth: '1px',
  borderColor: 'rgba(53, 117, 255, 0.938)',
  borderRight: 'none',
  borderLeft: 'none',
});

const DeleteButton = styled('button', {
  marginLeft: '10px',
  backgroundColor: 'rgb(231, 81, 81)',
  color: 'white',
  fontWeight: 'bold',
  borderRadius: '5px',
  width: '100px',
  padding: '0',
  borderWidth: '1px',
  borderColor: 'rgb(231, 81, 81)',
  borderRight: 'none',
  borderLeft: 'none',
});

export function EDButtons(): JSX.Element {
  const taskContext = useContext(TaskContext);
  const actions = useContext(TaskActionsContext);

  const onEditButtonClick = useCallback(() => {
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

    const newTask = prompt('Rename task:', name);

    if (newTask === null) {
      // NOTE: Do not editTask() if user cancels
      return;
    }

    actions.edit(index, { name: newTask, place, isFinished });
  }, [actions, taskContext]);

  const onEditPlaceClick = useCallback(() => {
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

    const newPlace = prompt('Rename task:', place);

    if (newPlace === null) {
      // NOTE: Do not editTask() if user cancels
      return;
    }

    actions.edit(index, { name, place: newPlace, isFinished });
  }, [actions, taskContext]);

  const onDeleteButtonClick = useCallback(() => {
    if (actions === null || taskContext === null) {
      return;
    }

    const {
      index,
    } = taskContext;

    actions.delete(index);
  }, [actions, taskContext]);

  return (
    <EDButtonsContainer>
      <EditButton onClick={onEditButtonClick}><p>Edit Name</p></EditButton>
      <EditButton onClick={onEditPlaceClick}><p>Edit Place</p></EditButton>
      <DeleteButton onClick={onDeleteButtonClick}><p>Delete</p></DeleteButton>
    </EDButtonsContainer>
  );
}
