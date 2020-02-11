import React from "react";

import { EDButtons } from './EDButtons';

export class TaskActions extends React.Component {
  render() {

    const { task, index, editTask, deleteTask } = this.props;

    return (
      <div className="task-buttons">
            <EDButtons task={task} index={index} editTask={editTask} deleteTask={deleteTask}/>
      </div>
    );
  }
}