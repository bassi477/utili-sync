import React, {useContext} from 'react';
import {AppModuleAdapterContextProvider} from './app-module-adapter-context-context-provider';
import {AppModuleAdapterContext} from './app-module-adapter-context-context';

export function MockComponent() {
  const {module, version} = useContext(AppModuleAdapterContext);

  return (
    <div>
      <p>
        <strong>Module Adapter Version:</strong> {version}
      </p>
      <p>
        <strong>Module Instance (JSON):</strong> {module?.toString()}
      </p>
    </div>
  );
}

export const BasicContextUsage = () => {
  return (
    <AppModuleAdapterContextProvider
      module={{
        id: 'ID',
        description: 'THIS IS DESCRIPTION',
        title: 'CREATED FROM OBJECT',
        type: 'app-core',
        root: (
          <>This is a root component of the module created using constructor</>
        ),
        status: 'module-ready',
      }}>
      <MockComponent />
    </AppModuleAdapterContextProvider>
  );
};
