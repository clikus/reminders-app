import React from 'react';
import { Task } from './types';

interface TaskContextValue {
  index: number;
  task: Task;
}

export const TaskContext = React.createContext<TaskContextValue | null>(null);
