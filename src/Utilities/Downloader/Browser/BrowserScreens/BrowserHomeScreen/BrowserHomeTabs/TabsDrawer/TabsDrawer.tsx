import { PropsWithChildren, useContext } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { BrowserContext } from "../../../../../../../Core/providers/BrowserContextProvider";

type ITabsDrawerProps = PropsWithChildren<{}>;

function TabsDrawer(props: ITabsDrawerProps) {
    const browserContext = useContext(BrowserContext);
    const overlayStyles = [
        TabsDrawerStyles.absolute,
        TabsDrawerStyles.overlay
    ];
    const coreStyles = [
        TabsDrawerStyles.absolute,
        TabsDrawerStyles.core
    ];
    const contentStyles = [
        TabsDrawerStyles.absolute,
        TabsDrawerStyles.content
    ];

    const DrawerOverlay = (
        <TouchableOpacity
            style={overlayStyles}
            onPress={
                () => browserContext.setWebTabsDrawerOpen(false)
            } />
    );

    const DrawerContent = (
        <View style={contentStyles}>
            {props.children}
        </View>
    );

    const DrawerCore = (
        <View style={coreStyles}>
            {DrawerOverlay}
            {DrawerContent}
        </View>
    );

    return (
        <>
            {
                browserContext.isWebTabsDrawerOpen ?
                    DrawerCore
                    : <></>

            }
        </>

    );
};

const TabsDrawerStyles = StyleSheet.create({
    absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    core: {
        width: '100%',
        height: '100%',
        zIndex: 1000
    },
    overlay: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        opacity: 0.6
    },
    content: {
        bottom: 0,
        width: '60%',
        height: '100%',
        backgroundColor: 'white',
        padding: 6
    }
});

export default TabsDrawer;