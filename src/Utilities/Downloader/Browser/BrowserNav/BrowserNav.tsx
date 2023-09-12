import React, { useContext } from "react";
import { View } from "react-native";
import BrowserNavStyles from "./BrowserNav.stylesheet";
import BrowserNavTab from "./BrowserNavTab/BrowserNavTab";
import { TBroswerNavTabsContentKey } from "../../../../Core/interfaces/Utility/Browser";
import BrowserNavTabsContent from "../../../../Core/constants/content/BrowserNavTabsContent";
import { BrowserContext } from "../../../../Core/providers/BrowserContextProvider";
import AppThemeIconProps from "../../../../Core/constants/resources/Icons";
import BrowserNavTabSeparator from "./BrowserNavTabSeparator/BrowserNavTabSeparator";

function BrowserNav(): React.ReactNode {
    const browserContext = useContext(BrowserContext);

    const browserNavIcons: Record<string, (color: string, size: number) => React.JSX.Element> = {
        home: AppThemeIconProps.utility.browser.navTab.browserIcon,
        downloads: AppThemeIconProps.utility.browser.navTab.downloadsIcon,
        history: AppThemeIconProps.utility.browser.navTab.historyIcon,
        bookmarks: AppThemeIconProps.utility.browser.navTab.bookmarksIcon,
    }

    const handleNavTabsNavigation = (key: TBroswerNavTabsContentKey) => {
        // if (key === 'tabs') {
        //     browserContext.setWebTabsDrawerOpen(!browserContext.isWebTabsDrawerOpen);
        // } else {

        // }
        browserContext.setWebTabsDrawerOpen(false);
        browserContext.setCurrentNavTabKey(key);
    };

    return (
        <View style={BrowserNavStyles.navContainer}>
            {
                Object.keys(BrowserNavTabsContent).map((key, index, array) => {

                    if (
                        key as TBroswerNavTabsContentKey === 'tabs'
                        && browserContext.currentNavTabKey !== 'home'
                    ) return;

                    return (
                        <>
                            <BrowserNavTab
                                navTab={BrowserNavTabsContent[key]}
                                action={() => handleNavTabsNavigation(key as TBroswerNavTabsContentKey)}
                                active={key as TBroswerNavTabsContentKey === browserContext.currentNavTabKey}
                                disabled={false}
                                icon={browserNavIcons[key]}
                                key={`BrowserNav-BrowserNavTab-${index}`} />
                            {
                                index != array.length - 1 ?
                                    <BrowserNavTabSeparator /> : <></>
                            }
                        </>
                    );
                })
            }
        </View>
    );
}

export default BrowserNav;