import {PropsWithChildren, createContext} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import AppThemeContextProvider from '../../../Core/providers/AppThemeContextProvider';
import AppStatusBar from '../../../Core/components/AppStatusBar/AppStatusBar';

const appBodyStyles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white', // bodyTheme['background']
    color: 'darkGray',
    textAlign: null,
  },
});

export type AppBaseContextProps = PropsWithChildren<{
  isDebug?: boolean;
}>;

export interface AppBaseContextState {}

const initialState: AppBaseContextState = {};

export const AppBaseContext = createContext<AppBaseContextState>(initialState);

export function AppBaseContextProvider({children}: AppBaseContextProps) {
  return (
    <AppBaseContext.Provider value={{}}>
      <NavigationContainer>
        <AppThemeContextProvider>
          <SafeAreaView style={appBodyStyles.safeAreaView}>
            <AppStatusBar />
            {/* <Downloader /> */}
            {children}
          </SafeAreaView>
        </AppThemeContextProvider>
      </NavigationContainer>
    </AppBaseContext.Provider>
  );
}
