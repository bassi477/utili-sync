import { StyleSheet } from "react-native";
import AppTheme from "../../../common/theme/AppTheme";

const AppBootstrapStyles = StyleSheet.create({
    appBootstrapSafeAreaView: {
        flex: 1,
        backgroundColor: AppTheme.body.background,
        color: AppTheme.body.color,
        textAlign: AppTheme.body.textAlign
    }
});

export default AppBootstrapStyles;