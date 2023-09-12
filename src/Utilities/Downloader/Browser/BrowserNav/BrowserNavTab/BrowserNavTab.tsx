import React from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { TBrowserNavTab } from "../../../../../Core/interfaces/Utility/Browser";
import BrowserNavTabStyles from "./BrowserNavTab.stylesheet";
import { AppThemeCoreColorProps, AppThemeGrayColorProps } from "../../../../../Core/constants/resources/Colors";

interface IBrowserNavTabProps {
    navTab: TBrowserNavTab;
    active: boolean;
    action: () => void;
    disabled: boolean;
    icon: (color: string, size: number) => React.JSX.Element;
};

const browserNavTabIconSize = 32,
    appThemeBaseDarkColor = AppThemeCoreColorProps.dark,
    appThemeBasePrimaryColor = AppThemeCoreColorProps.primary,
    appThemeGray200Color = AppThemeGrayColorProps.gray200;


function BrowserNavTab(props: IBrowserNavTabProps): React.ReactNode {

    const handleNavTabPress = () => {
        if (props.active) return;
        props.action();
    }

    const browserNavIconColor = props.active ?
        appThemeBasePrimaryColor
        : appThemeBaseDarkColor;

    const browserNavTextColor = props.active ?
        appThemeBasePrimaryColor
        : appThemeBaseDarkColor;

    return (
        <View style={BrowserNavTabStyles.navTabContainer}>
            <TouchableHighlight activeOpacity={0.8} underlayColor={appThemeGray200Color} style={BrowserNavTabStyles.navTabTouchable} onPress={handleNavTabPress}>
                <View style={BrowserNavTabStyles.navTabContentContainer}>
                    <View style={BrowserNavTabStyles.navTabIconContainer}>
                        {props.icon ? props.icon(browserNavIconColor, browserNavTabIconSize) : <Text>Icon</Text>}
                    </View>
                    <Text style={[BrowserNavTabStyles.navTabName, { color: browserNavTextColor }]}>{props.navTab.name}</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
};

export default BrowserNavTab;