import React from "react";

export class EDButtons extends React.Component {

    onEditButtonClick = () => {
        const { index, task, editTask } = this.props;
        const newTask = prompt("Rename task:", task.name);
        const userClickedCancel = newTask === null;

        if (userClickedCancel) {
            // NOTE: Do not editTask() if user cancels
            return;
        }

        editTask(index, { name : newTask , place: task.place , isFinished : task.isFinished });
    };

    onEditPlaceClick = () => {
        const { index, task, editTask } = this.props;
        const newPlace = prompt("Rename task:", task.place);
        const userClickedCancel = newPlace === null;

        if (userClickedCancel) {
            // NOTE: Do not editTask() if user cancels
            return;
        }

        editTask(index, { name : task.name, place: newPlace , isFinished : task.isFinished });
    };

    onDeleteButtonClick = () => {
        const { deleteTask, index } = this.props;
        deleteTask(index);
    };

    render() {
        return (
        <div className='task-actions-ed-buttons-container'>
            <button className="edit-action-button" onClick={this.onEditButtonClick}><p>Edit Name</p></button>
            <button className="edit-action-button" onClick={this.onEditPlaceClick}><p>Edit Place</p></button>
            <button className="delete-action-button" onClick={this.onDeleteButtonClick}><p>Delete</p></button>
        </div>
        );
    }
}
