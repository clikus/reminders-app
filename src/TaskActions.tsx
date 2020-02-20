import React from 'react';

import { styled } from 'styletron-react';
import { EDButtons } from './EDButtons';

const TaskButtons = styled('div', {
  textAlign: 'right',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
});

export function TaskActions(): JSX.Element {
  return (
    <TaskButtons>
      <EDButtons />
    </TaskButtons>
  );
}
