import React from "react";

export class TaskName extends React.Component {
  onToggleCheckbox = () => {
    const { task, editTask , index} = this.props;

    editTask(index, { name:  task.name , place: task.place, isFinished : !task.isFinished});
  }


  render() {
    const { task } = this.props;
    return (
      <div className="check-task">
        <form className='task-name-form'>
            <input className="task-checkbox" type="checkbox" name="taskBox" onChange={this.onToggleCheckbox} checked={!!task.isFinished}/>
            <label className="task-name-label">{task.name}({task.place})</label>
        </form>
      </div>
    );
  }
}