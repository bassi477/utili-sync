import React from 'react';
import {ReactNode} from './react-exports';

export const BasicReactExports = () => {
  const reactNode: ReactNode = (
    <>
      <p>Hi this is a basic export of React.ReactNode</p>
    </>
  );
  const reactNodeType = typeof reactNode;
  return (
    <>
      <p>A sample react node</p>
      {reactNode}
      <p>Object type</p>
      <p>{reactNodeType}</p>
    </>
  );
};
