import React from "react";

import { TaskItem } from "./TaskItem";

export class TaskList extends React.Component {
  render() {
    return (
      <div className="task-list-container">
        {this.props.tasks.map((task,index) => 
          <TaskItem key={index} index={index} task={task} editTask={this.props.editTask} deleteTask={this.props.deleteTask}/>
          )}
      </div>
    );
  }
}
