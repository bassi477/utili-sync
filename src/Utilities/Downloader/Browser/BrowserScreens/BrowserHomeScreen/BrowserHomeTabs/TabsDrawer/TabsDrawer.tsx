import { PropsWithChildren, useContext } from "react";
import { TouchableOpacity, View } from "react-native";
import { BrowserContext } from "../../../../../../../Core/providers/BrowserContextProvider";
import TabsDrawerStyles from "./TabsDrawer.stylesheet";

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

export default TabsDrawer;