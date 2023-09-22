import {AppBaseContextProvider} from './app-base.context';
import Browser from '../../../Utilities/Downloader/Browser/Browser';
import { Text } from 'react-native';

export type AppBaseProps = {};

export function AppBase() {
  return (
    <AppBaseContextProvider>
      <Browser />
      {/* <Text>Hello World</Text> */}
    </AppBaseContextProvider>
  );
}
