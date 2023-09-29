import React from 'react';
import {AppModule} from './app-module';

export function CreateUsingOfJsonString() {
  const {id, title, description, type} = AppModule.ofJsonString(
    "{ id: 'ID', description: 'THIS IS DESCRIPTION', title: 'CREATED FROM JSON', type: 'app-core:' }",
  );
  return (
    <div>
      {id}
      {title}
      {description}
      {type}
    </div>
  );
}

export function CreateUsingConstructor() {
  const {id, title, description, type} = new AppModule({
    id: 'ID',
    description: 'THIS IS DESCRIPTION',
    title: 'CREATED FROM OBJECT',
    type: 'app-core',
    root: <>This is a root component of the module created using constructor</>,
    status: 'module-ready',
  });

  return (
    <div>
      {id}
      {title}
      {description}
      {type}
    </div>
  );
}
