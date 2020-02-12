import React from 'react';

import { styled } from 'styletron-react';

const EDButtonsContainer = styled('div', {
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
});

const EditButton = styled('button', {
    marginLeft: '10px',
    backgroundColor: 'rgba(53, 117, 255, 0.938)',
    color:'white',
    fontWeight: 'bold',
    borderRadius: '5px',
    width: '100px',
    padding: '0',
    borderWidth: '1px',
    borderColor: 'rgba(53, 117, 255, 0.938)',
    borderRight: 'none',
    borderLeft: 'none'
});

const DeleteButton = styled('button', {
    marginLeft: '10px',
    backgroundColor: 'rgb(231, 81, 81)',
    color:'white',
    fontWeight: 'bold',
    borderRadius: '5px',
    width: '100px',
    padding: '0',
    borderWidth: '1px',
    borderColor: 'rgb(231, 81, 81)',
    borderRight: 'none',
    borderLeft: 'none'
});

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
        <EDButtonsContainer>
            <EditButton onClick={onEditButtonClick}><p>Edit Name</p></EditButton>
            <EditButton onClick={onEditPlaceClick}><p>Edit Place</p></EditButton>
            <DeleteButton onClick={onDeleteButtonClick}><p>Delete</p></DeleteButton>
        </EDButtonsContainer>
    );

}
