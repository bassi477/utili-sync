import { GestureResponderEvent, TouchableHighlight, View, Text } from "react-native";
import { AppThemeCoreColorProps, AppThemeGrayColorProps } from "../../../../../../../Core/constants/resources/Colors";
import AddressBarButtonStyles from "./AddressBarButton.stylesheet";

interface IAddressBarButtonProps {
    icon: (color: string, size: number) => React.JSX.Element;
    action: (e: GestureResponderEvent) => void;
};

const appThemeBaseDarkColor = AppThemeCoreColorProps.dark,
    appThemeGray200Color = AppThemeGrayColorProps.gray200,
    browserHomeAddressBarButtonIconSize = 24;

function AddressBarButton(props: IAddressBarButtonProps): React.JSX.Element {

    return (
        <View style={AddressBarButtonStyles.btnContainer}>
            <TouchableHighlight activeOpacity={0.8} underlayColor={appThemeGray200Color} onPress={props.action} style={AddressBarButtonStyles.btnHighlight}>
                {props.icon ? props.icon(appThemeBaseDarkColor, browserHomeAddressBarButtonIconSize) : <Text>Icon</Text>}
            </TouchableHighlight>
        </View>
    );
};

export default AddressBarButton;