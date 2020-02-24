import React, { useCallback } from 'react';

import { styled } from 'styletron-react';
import { Task } from './types';

const AlignCenter = styled('form', {
  textAlign: 'center',
});

const AddRandomButton = styled('button', {
  marginTop: '10px',
  marginLeft: '10px',
  paddingLeft: '10px',
  paddingRight: '10px',
  backgroundColor: 'orange',
  color: 'white',
  fontWeight: 'bold',
  borderRadius: '5px',
  width: '150px',
  borderWidth: '1px',
  borderColor: 'orange',
  borderRight: 'none',
  borderLeft: 'none',
});

interface AddTaskProps {
  addTask(newTask: Task): void;
}

async function getRandomTask(): Promise<string> {
  const response = await fetch('https://www.boredapi.com/api/activity');
  const data = await response.json();
  return data.activity;
}

export function AddRandomTask({ addTask }: AddTaskProps): JSX.Element {
  const onSubmitButtonClick = useCallback(async (event) => {
    event.preventDefault();
    const randomTask = await getRandomTask();
    addTask({ name: randomTask, place: '', isFinished: false });
    event.preventDefault();
  }, [addTask]);

  return (
    <AlignCenter onSubmit={onSubmitButtonClick}>
      <AddRandomButton><p>Add Random Task</p></AddRandomButton>
    </AlignCenter>
  );
}
