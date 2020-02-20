import React from 'react';
import { Task } from './types';

interface TaskActionsContextValue {
    edit(taskIndex: number, newTask: Task): void;
    delete(taskIndex: number): void;
}

export const TaskActionsContext = (
  React.createContext<TaskActionsContextValue | null>(null)
);
