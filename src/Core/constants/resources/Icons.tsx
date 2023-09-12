import AntDIcon from "react-native-vector-icons/AntDesign";
import MatCIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MatIcon from "react-native-vector-icons/MaterialIcons";
import FA6Icon from "react-native-vector-icons/FontAwesome6";

const AppThemeIconProps = {
    utility: {
        browser: {
            navTab: {
                browserIcon: (color: string, size: number) => <MatCIcon name="web" color={color} size={size} />,
                homeIcon: (color: string, size: number) => <AntDIcon name="home" color={color} size={size} />,
                downloadsIcon: (color: string, size: number) => <AntDIcon name="download" color={color} size={size} />,
                historyIcon: (color: string, size: number) => <MatCIcon name="web-clock" color={color} size={size} />,
                bookmarksIcon: (color: string, size: number) => <AntDIcon name="book" color={color} size={size} />,
            },
            webTab: {
                TabsIcon: (color: string, size: number) => <MatIcon name="web-stories" color={color} size={size} />,
                HomeIcon: (color: string, size: number) => <MatCIcon name="home" color={color} size={size} />,
                ShortcutIcon: (color: string, size: number) => <MatCIcon name="earth" color={color} size={size} />,
                ReloadIcon: (color: string, size: number) => <MatCIcon name="reload" color={color} size={size} />,
                MenuIcon: (color: string, size: number) => <FA6Icon name="ellipsis-vertical" color={color} size={size} />
            },
        },
    },
    common: {
        closeIcon: (color: string, size: number) => <MatCIcon name="close" color={color} size={size} />,
    }
};

// TODO update name structure.
export const AppIconCommonCollection = AppThemeIconProps.common;
export const AppThemeUtilityIconProps = AppThemeIconProps.utility;
export const AppThemeBrowserIconProps = AppThemeIconProps.utility.browser;
export const AppThemeBrowserNavTabIconProps = AppThemeIconProps.utility.browser.navTab;
export const AppThemeBrowserWebTabIconProps = AppThemeIconProps.utility.browser.webTab;

export default AppThemeIconProps;