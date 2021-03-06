import * as React from 'react';
import { useState, useCallback, useMemo } from 'react';

import { styled } from 'styletron-react';
import { AddTask } from './AddTask';
import { Reminders } from './Reminders';
import { TaskActionsContext } from './TaskActionsContext';
import { TaskList } from './TaskList';
import { TaskListHeader } from './TaskListHeader';
import { TaskFilter } from './TaskFilter';
import { Task } from './types';
import { AddRandomTask } from './AddRandomTask';

const AppContainer = styled('div', {
  textAlign: 'center',
  margin: 'auto',
  padding: '50px',
  width: '60%',
  backgroundColor: '#EAE7DC',
  borderRadius: '25px',
});

export function App(): JSX.Element {
  // Creation of useState task & setTask
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState(TaskFilter.ALL);
  // For adding a task to the list of tasks
  const addTask = useCallback((newTask) => {
    // Deconstruction of newList to add newTask to the beginning of tasks
    setTasks([newTask, ...tasks]);
  }, [setTasks, tasks]);

  const editTask = useCallback((taskIndex, newTask) => {
    const newList = tasks.map((task, index) => (taskIndex === index ? newTask : task));
    setTasks(newList);
  }, [setTasks, tasks]);

  const deleteTask = useCallback((taskIndex) => {
    const newList = tasks.filter((_, index) => (taskIndex !== index));
    setTasks(newList);
  }, [setTasks, tasks]);

  const displayingTasks = useMemo(() => {
    switch (filter) {
      case TaskFilter.FINISHED:
        return tasks.filter((task) => task.isFinished);
      case TaskFilter.TODO:
        return tasks.filter((task) => !task.isFinished);
      case TaskFilter.ALL:
      default:
        return tasks;
    }
  }, [tasks, filter]);

  const actions = useMemo(() => ({
    edit: editTask,
    delete: deleteTask,
  }), [editTask, deleteTask]);

  return (
    <AppContainer>
      <Reminders />
      <AddTask addTask={addTask} />
      <AddRandomTask addTask={addTask} />
      <TaskListHeader filter={filter} setFilter={setFilter} />
      <TaskActionsContext.Provider value={actions}>
        <TaskList tasks={displayingTasks} />
      </TaskActionsContext.Provider>
    </AppContainer>
  );
}
