import { useContext } from "react";
import { View } from "react-native";
import BrowserHomeWebViewStyles from "./BrowserHomeWebView.stylesheet";
import { BrowserHomeContext } from "../../../../../../Core/providers/BrowserHomeContextProvider";

function BrowserHomeWebView(): React.JSX.Element {
    const browserHomeContext = useContext(BrowserHomeContext);
    
    return (
        <View style={BrowserHomeWebViewStyles.webViewContainer}>
            {browserHomeContext.webView}
        </View>
    );
};

export default BrowserHomeWebView;