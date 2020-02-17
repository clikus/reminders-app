import React, { useCallback } from "react";
import * as TaskFilter from './taskFilter';

import { styled } from 'styletron-react';

const TaskListHeaderContainer = styled('div', {
  padding: '20px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
});

const TaskLabel = styled('h2', {
  textAlign: 'left',
  color: 'black',
  flexGrow: '1'
});

export function TaskListHeader(props) {

  const { filter, setFilter } = props;

  const onRadioClick = useCallback((event) => {
    const { value } = event.target;
    setFilter(value);
  }, [setFilter]);

  return (
    <TaskListHeaderContainer>
      <TaskLabel>Task List</TaskLabel>
      <div>
        <form>
          <input type="radio" onChange={onRadioClick} name="ALL" value={TaskFilter.ALL} checked={filter === TaskFilter.ALL}/> All 
          <input type="radio" onChange={onRadioClick} name="FINISHED" value={TaskFilter.FINISHED} checked={filter === TaskFilter.FINISHED}/> Finished
          <input type="radio" onChange={onRadioClick} name="TODO" value={TaskFilter.TODO} checked={filter === TaskFilter.TODO}/> To Do
        </form>
      </div>
    </TaskListHeaderContainer>
  );
}
