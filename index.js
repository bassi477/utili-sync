/**
 * @format
 */

import 'react-native-url-polyfill/auto';
import {AppRegistry} from 'react-native';
import appInfo from './app.json';
import {AppHost} from './src/base/app-host';

export function Root() {
  return <AppHost />;
}

AppRegistry.registerComponent(appInfo.name, () => Root);
