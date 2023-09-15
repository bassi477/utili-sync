import { StyleSheet, TextStyle } from "react-native";
import AppThemeFontScheme from "../../../../../Core/constants/resources/Fonts";
import { AppThemeCoreColorProps } from "../../../../../Core/constants/resources/Colors";
import AppTheme from "../../../../../common/theme/AppTheme";

type TAppThemeFontWeight = TextStyle['fontWeight'];

const navTabBorderWidth = AppTheme.navigation.nav.tab.border.width,
    navTabBorderColor = AppTheme.navigation.nav.tab.border.color,
    navTabBorderRadius = AppTheme.navigation.nav.tab.borderRadius;

const BrowserNavTabStyles = StyleSheet.create({
    navTabContainer: {
        flex: 0,
    },
    navTabTouchable: {
        flex: 0
    },
    navTabContentContainer: {
        flex: 0,
        borderBottomColor: navTabBorderColor,
        borderBottomWidth: navTabBorderWidth,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AppThemeCoreColorProps.light,
        borderTopEndRadius: navTabBorderRadius,
        borderTopStartRadius: navTabBorderRadius
    },
    navTabIconContainer: {

    },
    navTabName: {
        marginTop: 2,
        textAlign: 'center',
        fontSize: AppThemeFontScheme.sizes.sm,
        fontWeight: AppThemeFontScheme.weights.bold as TAppThemeFontWeight,
        marginBottom: navTabBorderWidth,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderWidth: navTabBorderWidth,
    }
});

export default BrowserNavTabStyles;