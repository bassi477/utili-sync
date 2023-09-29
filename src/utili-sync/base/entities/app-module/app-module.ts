import {ReactExports} from '../../types/react-exports';

/**
 * The different states that a module can have.
 */
export type TAppModuleStatus =
  | 'module-unavailable'
  | 'module-detected-local'
  | 'module-detected-remote'
  | 'module-loading'
  | 'module-loaded'
  | 'module-ready'
  | 'module-rendered'
  | 'module-paused'
  | 'module-stopped'
  | 'module-busy'
  | 'module-blocked'
  | 'module-crashed';

/** Types of modules */
export type TAppModuleType =
  | 'app-core'
  | 'app-module'
  | 'sub-module'
  | 'shared-module';

/** Defines a module entity in the application */
export interface IAppModule {
  /**
   * Identifier for the module.
   */
  id: string;
  /**
   * Title to display.
   */
  title: string;
  /**
   * A description about the Module.
   */
  description: string;
  /**
   * The type of module.
   */
  type: TAppModuleType;
  /**
   * Root component that is rendered by the module.
   */
  root: ReactExports.TAppReactNode;
  /**
   * Status of the module in application.
   */
  status: TAppModuleStatus;
}

export class AppModule implements IAppModule {
  id: string;

  title: string;

  description: string;

  type: TAppModuleType;

  root: ReactExports.TAppReactNode;

  status: TAppModuleStatus;

  constructor({id, description, title, type, root, status}: IAppModule) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.type = type;
    this.root = root;
    this.status = status;
  }

  toString() {
    return JSON.stringify({
      id: this.id,
      title: this.title,
      description: this.description,
      type: this.type,
    });
  }

  static ofJsonString(value: string) {
    const parsed = JSON.parse(value) as IAppModule;
    return new AppModule(parsed);
  }
}
