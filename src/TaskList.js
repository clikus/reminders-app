import React from 'react';

import { TaskItem } from './TaskItem';
import { TaskContext } from './TaskContext';
import { styled } from 'styletron-react';

const TaskContainer = styled('div', {
    background: 'rgba(224, 224, 224, 0.699)',
    borderRadius: '5px'
})


export function TaskList (props){
  const { tasks } = props;



  return (
    
    <TaskContainer>
      { tasks.map((task,index) => {

        const item = {
          index: index,
          task: task,
        }

        return (
          <TaskContext.Provider key={index} value={item}>
            <TaskItem />
          </TaskContext.Provider>
        );
      }
      )}
    </TaskContainer>
  );
}
