import React from 'react';

import { styled } from 'styletron-react';

const AlignCenter = styled('form', {
  textAlign: "center"
});

const AddTaskInputTag = styled('input', {
  marginRight: '10px',
  padding: '13px',
  borderRadius: '5px',
  width: '500px',
  border: 'none'
});

const AddPlaceInputTag = styled('input', {
  marginRight: '10px',
  padding: '13px',
  borderRadius: '5px',
  width: '250px',
  border: 'none'
});

const AddTaskButton = styled('button', {
  marginLeft: '10px',
  paddingLeft: '10px',
  paddingRight: '10px',
  backgroundColor: 'rgba(0, 252, 105, 0.74)',
  color: 'white',
  fontWeight: 'bold',
  borderadius: '5px',
  width: '100px',
  borderWidth: '1px',
  borderColor: 'rgba(0, 252, 105, 0.74)',
  borderRight: 'none',
  borderLeft: 'none'
});

export function AddTask (props) {

  const { addTask } = props;

  function onSubmitButtonClick (event) {
    const newTaskName = event.currentTarget["add-task-input"].value;
    const newPlaceName = event.currentTarget["add-task-place"].value;
    //addTask Object to add Multiple variables ex. name & isChecked
    addTask({
      name: newTaskName,
      place: newPlaceName,
      isFinished: false
    });

    event.preventDefault();
  }

  return (
    <AlignCenter onSubmit={onSubmitButtonClick}>
        <AddTaskInputTag type="text" name="add-task-input" placeholder="Remind me to..."/>
        <AddPlaceInputTag type="text" name="add-task-place" placeholder="Place of task"/>
        <AddTaskButton><p>Add Task</p></AddTaskButton>
    </AlignCenter>
  );
}

