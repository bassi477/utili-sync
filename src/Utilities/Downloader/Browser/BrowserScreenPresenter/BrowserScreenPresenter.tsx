import { useContext } from "react";
import { View } from "react-native";
import BrowserScreenPresenterStyles from "./BrowserScreenPresenter.stylesheet";
import BrowserNavTabsContent from "../../../../Core/constants/content/BrowserNavTabsContent";
import { BrowserContext } from "../../../../Core/providers/BrowserContextProvider";

function BrowserScreenPresenter(): React.JSX.Element {
    const browserContext = useContext(BrowserContext);

    return (
        <View style={BrowserScreenPresenterStyles.presenterContainer}>
            {BrowserNavTabsContent[browserContext.currentNavTabKey].screen}
        </View>
    );
};

export default BrowserScreenPresenter;