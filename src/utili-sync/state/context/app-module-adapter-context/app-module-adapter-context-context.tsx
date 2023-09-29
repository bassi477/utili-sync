import {createContext} from 'react';
import {ReactExports} from '../../../base/types/react-exports';
import {AppModule} from '../../../base/entities/app-module';

export interface IAppModuleAdapterContext {
  module: AppModule | undefined | null;
  version: string;
}

export interface IAppModuleAdapterProviderProps {
  children?: ReactExports.TAppReactNode;
}

const initialState: IAppModuleAdapterContext = {
  module: undefined,
  version: '0.1',
};

export const AppModuleAdapterContext =
  createContext<IAppModuleAdapterContext>(initialState);
