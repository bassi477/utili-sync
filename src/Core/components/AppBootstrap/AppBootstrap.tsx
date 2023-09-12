import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Downloader from "../../../Utilities/Downloader/Downloader";
import AppThemeContextProvider from "../../providers/AppThemeContextProvider";
import AppStatusBar from "../AppStatusBar/AppStatusBar";
import AppBootstrapStyles from "./AppBootstrap.stylesheet";

function AppBootstrap(): React.JSX.Element {

    return (
        <NavigationContainer>
            <AppThemeContextProvider>
                <SafeAreaView style={AppBootstrapStyles.appBootstrapSafeAreaView}>
                    <AppStatusBar />
                    <Downloader />
                </SafeAreaView>
            </AppThemeContextProvider>
        </NavigationContainer>
    );
};

export default AppBootstrap;