import { StyleSheet } from "react-native";

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

export default TabsDrawerStyles;