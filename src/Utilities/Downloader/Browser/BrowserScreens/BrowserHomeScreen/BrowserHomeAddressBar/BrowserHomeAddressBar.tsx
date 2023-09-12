import { useContext } from "react";
import { View } from "react-native";
import BrowserAddressHomeBarStyles from "./BrowserHomeAddressBar.stylesheet";
import { AppThemeBrowserWebTabIconProps } from "../../../../../../Core/constants/resources/Icons";
import AddressBarButton from "./AddressBarButton/AddressBarButton";
import AddressBarInputControl from "./AddressBarInputControl/AddressBarInputControl";
import BrowserHomeAddressBarStyles from "./BrowserHomeAddressBar.stylesheet";
import { BrowserContext } from "../../../../../../Core/providers/BrowserContextProvider";

function BrowserHomeAddressBar(): JSX.Element {

    const browserContext = useContext(BrowserContext);

    const handleTabsDrawerToggle = () => {
        browserContext.setWebTabsDrawerOpen(!browserContext.isWebTabsDrawerOpen);
    };

    const handleGoToHome = () => {
        const currentUrl = browserContext.currentWebTab.url;
        if(currentUrl && currentUrl  === '') return;
        browserContext.setCurrentWebTab(prevState => (
            {
                ...prevState,
                historyStack: [...prevState.historyStack, ''],
                url: undefined,
                name: 'Home'
            }
        ));
    };

    const LeftSection: React.JSX.Element = (
        <View style={BrowserHomeAddressBarStyles.leftSection}>
            <AddressBarButton
                icon={AppThemeBrowserWebTabIconProps.TabsIcon}
                action={handleTabsDrawerToggle} />
            <AddressBarButton
                icon={AppThemeBrowserWebTabIconProps.HomeIcon}
                action={handleGoToHome} />
        </View>
    );

    const MiddleSection: React.JSX.Element = (
        <View style={BrowserAddressHomeBarStyles.middleSection}>
            <AddressBarInputControl />
        </View>
    );

    const RightSection: React.JSX.Element = (
        <View style={BrowserAddressHomeBarStyles.rightSection}>
            <AddressBarButton
                icon={AppThemeBrowserWebTabIconProps.MenuIcon}
                action={() => { }} />
        </View>
    );

    return (
        <View style={BrowserAddressHomeBarStyles.addressBarContainer}>
            {LeftSection}
            {MiddleSection}
            {RightSection}
        </View>
    );
}

export default BrowserHomeAddressBar;