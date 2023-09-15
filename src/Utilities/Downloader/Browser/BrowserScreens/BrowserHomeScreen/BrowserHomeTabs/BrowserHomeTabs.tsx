import React, {useContext} from 'react';
import TabsDrawer from './TabsDrawer/TabsDrawer';
import {BrowserContext} from '../../../../../../Core/providers/BrowserContextProvider';
import Uuid from 'react-native-uuid';
import {
  IBrowserWebTab,
  TBrowserWebTabs,
} from '../../../../../../Core/interfaces/Utility/Browser';
import NewTabButton from './NewTabButton/NewTabButton';
import DrawerScrollView from './DrawerScrollView/DrawerScrollView';
import BrowserHomeTab from './BrowserHomeTab/BrowserHomeTab';

// TODO extract theme.
function BrowserHomeTabs(): React.JSX.Element {
  const browserContext = useContext(BrowserContext);

  const handleNewTab = () => {
    const newTabUuid = Uuid.v4().toString();
    const currentTabKey = browserContext.currentWebTabKey;
    let currentTab = undefined;
    let updatedState: TBrowserWebTabs = {};
    let newTabState: IBrowserWebTab = {
      url: undefined,
      name: 'Home',
      historyStack: [],
      nextTab: undefined,
      previousTab: undefined,
    };
    if (currentTabKey) {
      currentTab = browserContext.webTabs[currentTabKey];
      newTabState = {...newTabState, previousTab: currentTabKey};
      updatedState = {
        [currentTabKey]: {
          ...currentTab,
          nextTab: newTabUuid,
        },
      };
    }
    updatedState = {...updatedState, [newTabUuid]: newTabState};
    browserContext.setWebTabs(prevState => ({
      ...prevState,
      ...updatedState,
    }));
    browserContext.setCurrentWebTabKey(newTabUuid);
    browserContext.setWebTabsDrawerOpen(prevState => !prevState);
  };

  const handleChangeTab = (key: string) => {
    browserContext.setCurrentWebTabKey(key);
    browserContext.setWebTabsDrawerOpen(prevState => !prevState);
  };

  const handleCloseTab = (key: string) => {
    let webTabs = browserContext.webTabs;
    const rootTabKey = key;
    const rootTab = browserContext.webTabs[rootTabKey];
    const previousTabKey = rootTab.previousTab;
    const nextTabKey = rootTab.nextTab;
    if (nextTabKey) {
      let nextTab = browserContext.webTabs[nextTabKey];
      nextTab = {...nextTab, previousTab: previousTabKey};
      webTabs[nextTabKey] = nextTab;
    }
    if (previousTabKey) {
      let previousTab = browserContext.webTabs[previousTabKey];
      previousTab = {...previousTab, nextTab: nextTabKey};
      webTabs[previousTabKey] = previousTab;
    }
    const newCurrentTabKey = nextTabKey ?? previousTabKey;
    delete webTabs[rootTabKey];
    browserContext.setWebTabs(webTabs);
    browserContext.setCurrentWebTabKey(newCurrentTabKey);
    browserContext.setWebTabsDrawerOpen(prevState => !prevState);
  };

  const newTabButton = <NewTabButton action={handleNewTab} />;

  return (
    <TabsDrawer>
      <DrawerScrollView>
        {Object.keys(browserContext.webTabs).map((key, index) => {
          const webTabKey = key;
          const webTab = browserContext.webTabs[webTabKey];

          return (
            <BrowserHomeTab
              name={webTab.name}
              onChange={() => handleChangeTab(webTabKey)}
              onClose={() => handleCloseTab(webTabKey)}
            />
          );
        })}
      </DrawerScrollView>
      {newTabButton}
    </TabsDrawer>
  );
}

export default BrowserHomeTabs;
