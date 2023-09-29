import {createContext} from 'react';
import {ReactExports} from '../../types/react-exports';
import AppModule from '../../entities/app-module';

export interface IAppModuleAdapterContext {
  module: AppModule | undefined | null;
  version: string;
}

export interface IAppModuleAdapterProviderProps {
  children?: ReactExports.TAppReactNode;
}

const initialState: IAppModuleBaseContext = {
  module: undefined,
  status: 'module-unavailable',
  version: '0.1',
};

export const AppModuleBaseContext =
  createContext<IAppModuleBaseContext>(initialState);

export const AppModuleBaseContextProvider = (
  props: IAppModuleBaseContextProviderProps,
) => {
  const {children} = props;
  return (
    <AppModuleBaseContext.Provider value={initialState}>
      {children}
    </AppModuleBaseContext.Provider>
  );
};
