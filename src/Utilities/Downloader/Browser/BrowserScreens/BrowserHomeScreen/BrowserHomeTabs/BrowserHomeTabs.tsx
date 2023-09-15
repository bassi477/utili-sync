import React, {useContext} from 'react';
import TabsDrawer from './TabsDrawer/TabsDrawer';
import {ScrollView, Text, View} from 'react-native';
import {BrowserContext} from '../../../../../../Core/providers/BrowserContextProvider';
import {TouchableHighlight} from 'react-native';
import AppTheme from '../../../../../../common/theme/AppTheme';
import {
  AppIconCommonCollection,
  AppThemeBrowserNavTabIconProps,
} from '../../../../../../Core/constants/resources/Icons';
import AppThemeComponentProps from '../../../../../../Core/constants/resources/Components';
import Uuid from 'react-native-uuid';
import {
  IBrowserWebTab,
  TBrowserWebTabs,
} from '../../../../../../Core/interfaces/Utility/Browser';

const browserHomeTabSiteIconSize = 24,
  browserHomeTabCloseIconSize = 16,
  browserHomeTabAddButtonBg = AppTheme.colors.base.primary,
  browserHomeTabAddButtonColor = AppTheme.colors.base.light,
  browserHomeTabSiteIconColor = AppTheme.colors.gray.gray400,
  browserHomeTabCloseIconColor = AppTheme.colors.gray.gray800;

// TODO restructure design to support tab on complete row.
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

  return (
    <TabsDrawer>
      <View
        style={{
          flex: 0,
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          height: '100%',
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            width: '100%',
          }}>
          <ScrollView style={{flex: 1, width: '100%'}}>
            {Object.keys(browserContext.webTabs).map((key, index) => {
              const webTab = browserContext.webTabs[key];

              return (
                <View
                  style={{
                    flex: 0,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    margin: 2,
                    borderRadius: AppThemeComponentProps.borderRadius.normal,
                    borderColor: AppThemeComponentProps.border.color,
                    borderWidth: AppThemeComponentProps.border.widths[2],
                  }}>
                  <TouchableHighlight
                    style={{flex: 1, flexDirection: 'row'}}
                    onPress={() => handleChangeTab(key)}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                      <View
                        style={{
                          flex: 0,
                          flexDirection: 'column',
                          marginEnd: 4,
                          padding: 4,
                          paddingEnd: 8,
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRightColor: AppThemeComponentProps.border.color,
                          borderRightWidth:
                            AppThemeComponentProps.border.widths[2],
                        }}>
                        {AppThemeBrowserNavTabIconProps.browserIcon(
                          browserHomeTabSiteIconColor,
                          browserHomeTabSiteIconSize,
                        )}
                      </View>
                      <View
                        style={{
                          flex: 1,
                          flexDirection: 'row',
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                        }}>
                        <Text>{webTab.name}</Text>
                      </View>
                    </View>
                  </TouchableHighlight>

                  <View
                    style={{
                      borderLeftColor: AppThemeComponentProps.border.color,
                      borderLeftWidth: AppThemeComponentProps.border.widths[2],
                      // marginStart: 2, padding: 2,
                      flex: 0,
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <TouchableHighlight onPress={() => handleCloseTab(key)}>
                      {AppIconCommonCollection.closeIcon(
                        browserHomeTabCloseIconColor,
                        browserHomeTabCloseIconSize,
                      )}
                    </TouchableHighlight>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View
          style={{
            flex: 0,
            flexDirection: 'row',
            width: '100%',
            backgroundColor: browserHomeTabAddButtonBg,
            padding: 8,
          }}>
          <TouchableHighlight
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={handleNewTab}>
            <Text style={{color: browserHomeTabAddButtonColor}}>New tab</Text>
          </TouchableHighlight>
        </View>
      </View>
    </TabsDrawer>
  );
}

export default BrowserHomeTabs;
