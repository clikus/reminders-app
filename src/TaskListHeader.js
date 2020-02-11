import React from "react";
import * as TaskFilter from './taskFilter';

export function TaskListHeader(props) {

  const { filter, setFilter } = props;

  function onRadioClick(event) {
    const { value } = event.target;
    setFilter(value);
  }

  return (
    <div className="task-list-header-container">
      <h2 className="task-label task-list-flex-item">Task List</h2>
      <div>
        <form>
          <input type="radio" onChange={onRadioClick} name="ALL" value={TaskFilter.ALL} checked={filter === TaskFilter.ALL}/> All 
          <input type="radio" onChange={onRadioClick} name="FINISHED" value={TaskFilter.FINISHED} checked={filter === TaskFilter.FINISHED}/> Finished
          <input type="radio" onChange={onRadioClick} name="TODO" value={TaskFilter.TODO} checked={filter === TaskFilter.TODO}/> To Do
        </form>
      </div>
    </div>
  );
}
