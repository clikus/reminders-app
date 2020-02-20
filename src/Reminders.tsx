import React from 'react';

import { styled } from 'styletron-react';

const CenterAlign = styled('div', {
  textAlign: 'center',
});

export function Reminders(): JSX.Element {
  return (
    <CenterAlign>
      <h1>Reminders</h1>
    </CenterAlign>
  );
}
