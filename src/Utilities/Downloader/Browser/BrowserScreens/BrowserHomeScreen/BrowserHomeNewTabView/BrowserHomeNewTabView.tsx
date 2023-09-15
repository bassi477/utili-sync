import { ScrollView, ScrollViewComponent, Text, TouchableHighlight, View } from "react-native";
import { IBrowserWebShortcut, IBrowserWebTab, TBrowserWebShortcuts } from "../../../../../../Core/interfaces/Utility/Browser";
import { useContext } from "react";
import { BrowserContext } from "../../../../../../Core/providers/BrowserContextProvider";
import uuid from 'react-native-uuid';

const BrowserHomeNewTabShortcuts: TBrowserWebShortcuts = [
    {
        name: 'Google',
        url: 'https://google.com'
    },
    {
        name: 'Youtube',
        url: 'https://youtube.com'
    },
    {
        name: 'Facebook',
        url: 'https://facebook.com'
    },
    {
        name: 'Twitter',
        url: 'https://twitter.com'
    },
    {
        name: 'Netflix',
        url: 'https://netflix.com'
    },
    {
        name: 'Gmail',
        url: 'https://gmail.com'
    },
    {
        name: 'Office',
        url: 'https://office.com'
    },
    {
        name: 'Outlook',
        url: 'https://outlook.com'
    }
];


function BrowserHomeNewTabView(): React.JSX.Element {
    const browserContext = useContext(BrowserContext);
    const currentTabKey = browserContext.currentWebTabKey;

    const handleShortcutPress = (shortcut: IBrowserWebShortcut) => {
        const newTabKey = currentTabKey ?? uuid.v4().toString();
        let newTab: IBrowserWebTab = {
            name: shortcut.name,
            historyStack: [],
            url: shortcut.url,
            nextTab: undefined,
            previousTab: undefined
        };

        if(currentTabKey) {
            const currentTab = browserContext.webTabs[currentTabKey];
            newTab = {
                ...currentTab,
                name: shortcut.name,
                historyStack: [...currentTab.historyStack, currentTab.url],
                url: shortcut.url,
            };
        }

        browserContext.setWebTabs(prevState => ({
            ...prevState,
            [newTabKey]: newTab
        }));
    };

    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            backgroundColor: 'purple'
        }}>
            <View style={{
                flex: 0,
                flexDirection: "row",
                justifyContent: 'space-between',
                backgroundColor: 'yellow'
            }}>
                <Text>Shortcuts</Text>
                <View>
                    <TouchableHighlight>
                        <Text>Edit</Text>
                    </TouchableHighlight>
                </View>
            </View>
            <ScrollView style={{
                backgroundColor: 'gray',
                flex: 1
            }}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    backgroundColor: 'blue',
                    flexWrap: 'wrap',
                }}>
                    {
                        BrowserHomeNewTabShortcuts.map((shortcut, index) => (
                            <View style={{
                                flex: 1,
                                width: '20%',
                                height: 'auto',
                                backgroundColor: 'orange'
                            }}>
                                <View style={{
                                    flex: 1,
                                    width: '100%',
                                    height: 'auto'
                                }}>
                                    <TouchableHighlight onPress={() => handleShortcutPress(shortcut)}>
                                        <View style={{
                                            flex: 1
                                        }}>
                                            <Text>{shortcut.image}</Text>
                                            <Text>{shortcut.name}</Text>
                                        </View>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        ))
                    }
                </View>
            </ScrollView>
        </View>
    );
};

export default BrowserHomeNewTabView;