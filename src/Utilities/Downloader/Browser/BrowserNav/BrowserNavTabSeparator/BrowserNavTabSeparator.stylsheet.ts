import { StyleSheet } from "react-native";
import AppThemeComponentProps from "../../../../../Core/constants/resources/Components";

const BrowserNavTabSeparatorStyles = StyleSheet.create({
    separator: {
        flex: 0,
        width: 1,
        height: '30%',
        borderColor: AppThemeComponentProps.border.color,
        borderWidth: AppThemeComponentProps.border.width
    }
});

export default BrowserNavTabSeparatorStyles;