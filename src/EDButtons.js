import React, { useContext, useCallback } from 'react';

import { styled } from 'styletron-react';
import { TaskActionsContext } from './TaskActionsContext';
import { TaskContext } from './TaskContext';

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

export function EDButtons () {
    const { index, task } = useContext(TaskContext);

    const actions = useContext(TaskActionsContext);

    const onEditButtonClick = useCallback(() => {
        const newTask = prompt("Rename task:", task.name);
        const userClickedCancel = newTask === null;

        if (userClickedCancel) {
            // NOTE: Do not editTask() if user cancels
            return;
        }

        actions.edit(index, { name : newTask , place: task.place , isFinished : task.isFinished });
    }, [actions, index, task]);

    const onEditPlaceClick = useCallback(() => {
        const newPlace = prompt("Rename task:", task.place);
        const userClickedCancel = newPlace === null;

        if (userClickedCancel) {
            // NOTE: Do not editTask() if user cancels
            return;
        }

        actions.edit(index, { name : task.name, place: newPlace , isFinished : task.isFinished });
    }, [actions, index, task]);

    const onDeleteButtonClick = useCallback(() => {
        actions.delete(index);
    }, [actions, index]);

    return (
        <EDButtonsContainer>
            <EditButton onClick={onEditButtonClick}><p>Edit Name</p></EditButton>
            <EditButton onClick={onEditPlaceClick}><p>Edit Place</p></EditButton>
            <DeleteButton onClick={onDeleteButtonClick}><p>Delete</p></DeleteButton>
        </EDButtonsContainer>
    );

}
