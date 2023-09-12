// interface ThemeContextProvider

import { PropsWithChildren, createContext } from "react";
import { useColorScheme } from "react-native";

interface IAppThemeContext {
    isDarkMode: boolean;
}

type TAppThemeContextProviderProps = PropsWithChildren<{}>;

export const ThemeContext = createContext<IAppThemeContext>({
    isDarkMode: false
});

function AppThemeContextProvider(props: TAppThemeContextProviderProps): React.JSX.Element {

    const themeContextState: IAppThemeContext = {
        isDarkMode: useColorScheme() === 'dark'
    };

    return (
        <ThemeContext.Provider value={themeContextState}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export default AppThemeContextProvider;