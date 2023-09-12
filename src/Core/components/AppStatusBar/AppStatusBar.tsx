import { StatusBar, StatusBarStyle } from "react-native";
import { AppThemeCoreColorProps } from "../../constants/resources/Colors";

function AppStatusBar(): React.JSX.Element {
    const barStyle: StatusBarStyle = 'dark-content';
    const backgroudColor = AppThemeCoreColorProps.light;

    return (
        <StatusBar
            barStyle={barStyle}
            backgroundColor={backgroudColor}
        />
    );
};

export default AppStatusBar;

/**
 * 
 * appThemeContext.isDarkMode ?
        'light-content'
        : 'dark-content';
 */