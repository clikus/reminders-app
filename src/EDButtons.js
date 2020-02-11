import React from "react";

export function EDButtons (props) {
    const { index, task, editTask, deleteTask } = props;

    function onEditButtonClick() {
        const newTask = prompt("Rename task:", task.name);
        const userClickedCancel = newTask === null;

        if (userClickedCancel) {
            // NOTE: Do not editTask() if user cancels
            return;
        }

        editTask(index, { name : newTask , place: task.place , isFinished : task.isFinished });
    }

    function onEditPlaceClick() {
        const newPlace = prompt("Rename task:", task.place);
        const userClickedCancel = newPlace === null;

        if (userClickedCancel) {
            // NOTE: Do not editTask() if user cancels
            return;
        }

        editTask(index, { name : task.name, place: newPlace , isFinished : task.isFinished });
    }

    function onDeleteButtonClick() {
        deleteTask(index);
    }

    return (
        <div className='task-actions-ed-buttons-container'>
            <button className="edit-action-button" onClick={onEditButtonClick}><p>Edit Name</p></button>
            <button className="edit-action-button" onClick={onEditPlaceClick}><p>Edit Place</p></button>
            <button className="delete-action-button" onClick={onDeleteButtonClick}><p>Delete</p></button>
        </div>
    );

}
