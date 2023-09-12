import { View } from "react-native";
import BrowserNavTabSeparatorStyles from "./BrowserNavTabSeparator.stylsheet";

function BrowserNavTabSeparator(): React.JSX.Element {

    return (
        <View style={BrowserNavTabSeparatorStyles.separator} />
    );
};

export default BrowserNavTabSeparator;