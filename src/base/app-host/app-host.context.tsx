import {PropsWithChildren, createContext} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import AppThemeContextProvider from '../../Core/providers/AppThemeContextProvider';
import AppStatusBar from '../../Core/components/AppStatusBar/AppStatusBar';

const appBodyStyles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white', // bodyTheme['background']
    color: 'darkGray',
    textAlign: null,
  },
});

export type AppHostContextProps = PropsWithChildren<{
  isDebug?: boolean;
}>;

export interface AppHostContextState {}

const initialState: AppHostContextState = {};

export const AppHostContext = createContext<AppHostContextState>(initialState);

export function AppHostContextProvider({children}: AppHostContextProps) {
  return (
    <AppHostContext.Provider value={{}}>
      <NavigationContainer>
        <AppThemeContextProvider>
          <SafeAreaView style={appBodyStyles.safeAreaView}>
            <AppStatusBar />
            {/* <Downloader /> */}
            {children}
          </SafeAreaView>
        </AppThemeContextProvider>
      </NavigationContainer>
    </AppHostContext.Provider>
  );
}
