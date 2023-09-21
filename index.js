/**
 * @format
 */

import 'react-native-url-polyfill/auto';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {AppBase} from './src/utili-sync/base/core/app-base';

AppRegistry.registerComponent(appName, () => AppBase);
