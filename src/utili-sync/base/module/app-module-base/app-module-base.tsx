import {Text, View} from 'react-native';
import {ReactExports} from '../../types/react-exports'

/** Types of modules */
export type AppModuleType =
  | 'app-core'
  | 'app-module'
  | 'sub-module'
  | 'shared-module';

/** Defines a module in the application */
export interface AppModule {
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
  type: AppModuleType;
  /**
   * Root component that is rendered by the module.
   */
  root: ReactExports.TAppReactNode;
}

export type AppModuleBaseProps = AppModule;

// const styles = StyleSheet.create({
//   text: {},
// });

export function AppModuleBase(props: AppModuleBaseProps) {
  const {id, title, description, root} = props;
  return (
    <View>
      <Text>{id}</Text>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Text>Root Component</Text>
      {root}
    </View>
  );
}
