import {Text} from 'react-native';
import {AppButtonBase} from './app-button-base';

/**
 * Update the action and children to see changes.
 * @returns a simple app-button-base implementation
 */
export const AppButtonExample = () => (
  <AppButtonBase
    action={() => {
      /**
       * Handle action here.
       */
    }}>
    <Text>Click me</Text>
  </AppButtonBase>
);
