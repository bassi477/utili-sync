import MatCIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MatDIcon from "react-native-vector-icons/MaterialIcons";
import FA6Icon from "react-native-vector-icons/FontAwesome6";

const AppIconCatalog = {
    utilities: {
        browser: {
            addressBar: {
                tab: {
                    core: MatDIcon,
                    name: 'web-stories'
                },
                home: {
                    core: MatCIcon,
                    name: 'home'
                },
                reload: {
                    core: MatCIcon,
                    name: 'reload'
                },
                menu: {
                    core: FA6Icon,
                    name: 'ellipsis-vertical'
                },
            },
            home: {
                shortcut: {
                    core: MatCIcon,
                    name: 'earth'
                },
            },
            navBar: {
                web: {
                    core: MatCIcon,
                    name: 'web'
                },
                download: {
                    core: MatCIcon,
                    name: 'download'
                },
                history: {
                    core: MatCIcon,
                    name: 'web-clock'
                },
                bookmark: {
                    core: MatCIcon,
                    name: 'bookmark-multiple'
                }
            }
        }
    }
};

export default AppIconCatalog;