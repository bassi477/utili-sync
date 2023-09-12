import { ScrollView, ScrollViewComponent, Text, TouchableHighlight, View } from "react-native";
import { IBrowserWebShortcut, TBrowserWebShortcuts } from "../../../../../../Core/interfaces/Utility/Browser";
import { useContext } from "react";
import { BrowserContext } from "../../../../../../Core/providers/BrowserContextProvider";


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

    const handleShortcutPress = (shortcut: IBrowserWebShortcut) => {
        browserContext.setCurrentWebTab(prevState => (
            {
                ...prevState,
                name: shortcut.name,
                historyStack: [...prevState.historyStack, shortcut.url],
                url: shortcut.url,
            }
        ));
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