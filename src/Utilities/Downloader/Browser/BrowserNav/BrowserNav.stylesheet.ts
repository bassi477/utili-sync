import { StyleSheet } from "react-native";
import { AppThemeCoreColorProps } from "../../../../Core/constants/resources/Colors";
import AppTheme from "../../../../common/theme/AppTheme";

const navBarProps = AppTheme.navigation.navBar;
const navBarLightTheme = AppTheme.navigation.navBar.theme.light;

const BrowserNavStyles = StyleSheet.create({
    navContainer: {
        flex: 0,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: AppThemeCoreColorProps.light,
        paddingHorizontal: navBarProps.paddingX,
        paddingVertical: navBarProps.paddingY,
        color: navBarLightTheme.color.base
    },
});

export default BrowserNavStyles;