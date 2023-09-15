import {useContext} from 'react';
import BrowserHomeAddressBar from './BrowserHomeAddressBar/BrowserHomeAddressBar';
import {View} from 'react-native';
import BrowserHomeScreenStyles from './BrowserHomeScreen.stylesheet';
import BrowserHomeWebView from './BrowserHomeWebView/BrowserHomeWebView';
import {WebViewNavigation} from 'react-native-webview';
import BrowserHomeTabs from './BrowserHomeTabs/BrowserHomeTabs';
import BrowserHomeNewTabView from './BrowserHomeNewTabView/BrowserHomeNewTabView';
import {BrowserContext} from '../../../../../Core/providers/BrowserContextProvider';
import BrowserHomeContextProvider from '../../../../../Core/providers/BrowserHomeContextProvider';

function BrowserHomeScreen(): React.JSX.Element {
  const browserContext = useContext(BrowserContext);
  const currentTabKey = browserContext.currentWebTabKey;
  const currentTab = currentTabKey
    ? browserContext.webTabs[currentTabKey]
    : undefined;
  const isNewTab = currentTab?.url === undefined;
  const isNoTab = currentTabKey === undefined;

  const onNavigationStateChange = (event: WebViewNavigation) => {
    if (event.loading) {
      // page is currently loading.
    }

    const url = event.url;
    const title = event.title;

    // if (currentTab && currentTab.type === BrowserDocumentTabType.HOME) {
    //     // current tab is home. create a new tab and update current tab.
    //     const tab: BrowserDocumentTab = {
    //         id: browserTabs.length,
    //         title,
    //         url,
    //         type: BrowserDocumentTabType.EXTERNAL
    //     };
    //     // update list of tabs.
    //     setBrowserTabs(prevState => ([...prevState, tab]));
    //     // update current tab.
    //     setCurrentTab(tab);

    // } else if (currentTab && currentTab.type === BrowserDocumentTabType.EXTERNAL) {
    //     // if external, just update the current tab.
    //     setCurrentTab(prevState => ({ ...prevState, title, url }));
    // }
  };

  const AddressBar: React.JSX.Element = <BrowserHomeAddressBar />;

  const WebView: React.JSX.Element = <BrowserHomeWebView />;

  const NewTabView: React.JSX.Element = <BrowserHomeNewTabView />;

  return (
    <BrowserHomeContextProvider
      uri={currentTab?.url || ''}
      onNavigationStateChange={onNavigationStateChange}>
      <View style={BrowserHomeScreenStyles.browserHomeContainer}>
        {AddressBar}
        {isNewTab || isNoTab ? NewTabView : WebView}
        <BrowserHomeTabs />
      </View>
    </BrowserHomeContextProvider>
  );
}

export default BrowserHomeScreen;
