import React, { useCallback } from 'react';

import { styled } from 'styletron-react';
import { Task } from './types';

const AlignCenter = styled('form', {
  textAlign: 'center',
});

const AddTaskInputTag = styled('input', {
  marginRight: '10px',
  padding: '13px',
  borderRadius: '5px',
  width: '400px',
  border: 'none',
});

const AddPlaceInputTag = styled('input', {
  marginRight: '10px',
  padding: '13px',
  borderRadius: '5px',
  width: '200px',
  border: 'none',
});

const AddTaskButton = styled('button', {
  marginLeft: '10px',
  paddingLeft: '10px',
  paddingRight: '10px',
  backgroundColor: '#4CAF50',
  color: 'white',
  fontWeight: 'bold',
  borderRadius: '5px',
  width: '100px',
  borderWidth: '1px',
  borderColor: '#4CAF50',
  borderRight: 'none',
  borderLeft: 'none',
});

interface AddTaskProps {
  addTask(newTask: Task): void;
}

export function AddTask({ addTask }: AddTaskProps): JSX.Element {
  const onSubmitButtonClick = useCallback((event) => {
    const newTaskName = event.currentTarget['add-task-input'].value;
    const newPlaceName = event.currentTarget['add-task-place'].value;
    // addTask Object to add Multiple variables ex. name & isChecked
    addTask({
      name: newTaskName,
      place: newPlaceName,
      isFinished: false,
    });

    event.preventDefault();
  }, [addTask]);

  return (
    <AlignCenter onSubmit={onSubmitButtonClick}>
      <AddTaskInputTag type="text" name="add-task-input" placeholder="Remind me to..." />
      <AddPlaceInputTag type="text" name="add-task-place" placeholder="Place of task" />
      <AddTaskButton><p>Add Task</p></AddTaskButton>
    </AlignCenter>
  );
}
