import React,{useState} from 'react';
import './css/App.css';
import './css/AddTask.css';
import './css/TaskListHeader.css';
import './css/TaskList.css';

import { AddTask } from './AddTask';
import { Reminders } from './Reminders';
import { TaskList } from './TaskList';
import { TaskListHeader } from './TaskListHeader';
import { styled } from 'styletron-react';
import * as TaskFilter from './taskFilter';

const AppContainer = styled('div', {
  textAlign: 'center',
  margin: 'auto',
  padding: '50px',
  width: '60%',
  backgroundColor: '#ffd082',
  borderRadius: '25px'
});

export function App() {
  //Creation of useState task & setTask
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState(TaskFilter.ALL);
  //For adding a task to the list of tasks
  function addTask(newTask) {
    //Deconstruction of newList to add newTask to the beginning of tasks
    const newList = [newTask,...tasks];
    setTasks(newList) 
  }

  function editTask(taskIndex, newTask) {
    const newList = tasks.map((task, index) => taskIndex === index ? newTask: task);
    setTasks(newList);
  }

  function deleteTask(taskIndex) {
    const newList = tasks.filter((_, index) => taskIndex !== index);
    setTasks(newList);
  }

  let displayingTasks;

  switch (filter) {
    case TaskFilter.FINISHED:
      displayingTasks = tasks.filter(task => task.isFinished);
      break;
    case TaskFilter.TODO:
      displayingTasks = tasks.filter(task => !task.isFinished);
      break;
    case TaskFilter.ALL:
    default:
      displayingTasks = tasks;
      break;
  }

  return (
    <AppContainer>
      <Reminders />
      <AddTask addTask={addTask}/>
      <TaskListHeader filter={filter} setFilter={setFilter}/>
      <TaskList tasks={displayingTasks} editTask={editTask} deleteTask={deleteTask} filter={filter}/>
    </AppContainer>
  );
}
