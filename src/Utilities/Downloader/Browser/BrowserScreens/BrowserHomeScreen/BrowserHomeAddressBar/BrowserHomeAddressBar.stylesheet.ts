import { StyleSheet } from "react-native";
import { AppThemeCoreColorProps } from "../../../../../../Core/constants/resources/Colors";
import AppTheme from "../../../../../../Core/constants/theme/AppTheme";

const navBarProps = AppTheme.navigation.navBar;
const navBarLightTheme = AppTheme.navigation.navBar.theme.light;

const BrowserHomeAddressBarStyles = StyleSheet.create({
    addressBarContainer: {
        flex: 0,
        width: '100%',
        flexDirection: "row",
        backgroundColor: AppThemeCoreColorProps.light,
        paddingHorizontal: navBarProps.paddingX,
        paddingVertical: navBarProps.paddingY,
        color: navBarLightTheme.color.base
    },
    leftSection: {
        flex: 0,
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    middleSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    rightSection: {
        flex: 0,
        flexDirection: "row",
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
});

export default BrowserHomeAddressBarStyles;