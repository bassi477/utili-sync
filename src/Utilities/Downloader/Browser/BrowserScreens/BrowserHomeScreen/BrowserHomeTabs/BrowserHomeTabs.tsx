import React, { useContext } from "react";
import TabsDrawer from "./TabsDrawer/TabsDrawer";
import { Text, View } from "react-native";
import { BrowserContext } from "../../../../../../Core/providers/BrowserContextProvider";
import { TouchableHighlight } from "react-native";
import AppTheme from "../../../../../../Core/constants/theme/AppTheme";
import { AppIconCommonCollection, AppThemeBrowserNavTabIconProps } from "../../../../../../Core/constants/resources/Icons";
import AppThemeComponentProps from "../../../../../../Core/constants/resources/Components";
import Uuid from 'react-native-uuid';

const browserHomeTabSiteIconSize = 24,
    browserHomeTabCloseIconSize = 20,
    browserHomeTabAddButtonBg = AppTheme.colors.core.primary,
    browserHomeTabAddButtonColor = AppTheme.colors.core.light,
    browserHomeTabSiteIconColor = AppTheme.colors.gray.gray400,
    browserHomeTabCloseIconColor = AppTheme.colors.gray.gray800;

// TODO restructure design to support tab on complete row.
function BrowserHomeTabs(): React.JSX.Element {
    const browserContext = useContext(BrowserContext);

    const handleNewTab = () => {
        const newTabUuid = Uuid.v4().toString();

        browserContext.setWebTabs(prevState => (
            {
                ...prevState,
                [newTabUuid]: {
                    url: undefined,
                    name: 'Home',
                    historyStack: []
                }
            }
        ));

        browserContext.setCurrentWebTab({
            url: undefined,
            name: 'Home',
            historyStack: []
        });

    }

    return (
        <TabsDrawer>
            <View style={{ flex: 0, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', height: '100%' }}>
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', width: '100%' }}>
                    {
                        Object.keys(browserContext.webTabs).map((key, index) => {
                            const webTab = browserContext.webTabs[key];

                            return (
                                <View style={{
                                    flex: 0, flexDirection: 'row', justifyContent: 'flex-start', margin: 2, borderRadius: AppThemeComponentProps.borderRadius.normal,
                                    borderColor: AppThemeComponentProps.border.color,
                                    borderWidth: AppThemeComponentProps.border.widths[2]
                                }}>
                                    <View style={{
                                        flex: 0, flexDirection: 'column', marginEnd: 4, padding: 4, justifyContent: 'center', alignItems: 'center', borderRightColor: AppThemeComponentProps.border.color,
                                        borderRightWidth: AppThemeComponentProps.border.widths[2]
                                    }}>
                                        {AppThemeBrowserNavTabIconProps.browserIcon(browserHomeTabSiteIconColor, browserHomeTabSiteIconSize)}
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <TouchableHighlight onPress={() => { }}>
                                            <Text>{webTab.name}</Text>
                                        </TouchableHighlight>
                                    </View>
                                    <View style={{
                                        borderLeftColor: AppThemeComponentProps.border.color,
                                        borderLeftWidth: AppThemeComponentProps.border.widths[2],
                                        // marginStart: 2, padding: 2,
                                        flex: 0, flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <TouchableHighlight>
                                            {AppIconCommonCollection.closeIcon(browserHomeTabCloseIconColor, browserHomeTabCloseIconSize)}
                                        </TouchableHighlight>
                                    </View>
                                </View>
                            );
                        })
                    }

                </View>
                <View style={{ flex: 0, flexDirection: 'row', width: '100%', backgroundColor: browserHomeTabAddButtonBg, padding: 8 }}>
                    <TouchableHighlight style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
                        onPress={handleNewTab}>
                        <Text style={{ color: browserHomeTabAddButtonColor }}>New tab</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </TabsDrawer>
    );
}

export default BrowserHomeTabs;