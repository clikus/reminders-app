import React from "react";

export function AddTask(props) {

  const { addTask } = props;

  function onSubmitButtonClick (event){
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
    <form className="App" onSubmit={onSubmitButtonClick}>
      <input className="add-task-input-tag" type="text" name="add-task-input" placeholder="Remind me to..."/>
      <input className="add-task-place-tag" type="text" name="add-task-place" placeholder="Place of task"/>
      <button className="add-task-button">
        <p>Add Task</p>
      </button>
    </form>
  )
}
