import React from "react";

export function TaskName(props) {
  const { task, editTask , index} = props;

  function onToggleCheckbox() {
    editTask(index, { name:  task.name , place: task.place, isFinished : !task.isFinished});
  }

  return (
    <div className="check-task">
      <form className='task-name-form'>
        <input className="task-checkbox" type="checkbox" name="taskBox" onChange={onToggleCheckbox} checked={!!task.isFinished}/>
        <label className="task-name-label">{task.name}({task.place})</label>
      </form>
    </div>
  );
}
