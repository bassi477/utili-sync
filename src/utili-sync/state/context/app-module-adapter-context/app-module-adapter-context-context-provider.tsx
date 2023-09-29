import React, {ReactNode} from 'react';
import {AppModuleAdapterContext} from './app-module-adapter-context-context';
import {AppModule} from '../../../base/entities/app-module';

export type TAppModuleAdapterContextProviderProps = {
  /**
   * app-module of the context.
   */
  module: AppModule;

  /**
   * children to be rendered within this context.
   */
  children: ReactNode;
};

export function AppModuleAdapterContextProvider({
  module,
  children,
}: TAppModuleAdapterContextProviderProps) {
  return (
    <AppModuleAdapterContext.Provider
      value={{
        version: '1.0',
        module,
      }}>
      {children}
    </AppModuleAdapterContext.Provider>
  );
}
