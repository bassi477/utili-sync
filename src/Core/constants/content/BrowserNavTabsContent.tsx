import BrowserBookmarksScreen from "../../../Utilities/Downloader/Browser/BrowserScreens/BrowserBookmarksScreen/BrowserBookmarksScreen";
import BrowserDownloadsScreen from "../../../Utilities/Downloader/Browser/BrowserScreens/BrowserDownloadsScreen/BrowserDownloadsScreen";
import BrowserHistoryScreen from "../../../Utilities/Downloader/Browser/BrowserScreens/BrowserHistoryScreen/BrowserHistoryScreen";
import BrowserHomeScreen from "../../../Utilities/Downloader/Browser/BrowserScreens/BrowserHomeScreen/BrowserHomeScreen";
import { IBroswerNavTabsContent } from "../../interfaces/Utility/Browser";



const BrowserNavTabsContent: IBroswerNavTabsContent = {
    home: {
        name: 'Browse',
        screen: <BrowserHomeScreen />
    },
    downloads: {
        name: 'Downloads',
        screen: <BrowserDownloadsScreen />
    },
    history: {
        name: 'History',
        screen: <BrowserHistoryScreen />
    },
    bookmarks: {
        name: 'Bookmarks',
        screen: <BrowserBookmarksScreen />
    }
};

export default BrowserNavTabsContent;