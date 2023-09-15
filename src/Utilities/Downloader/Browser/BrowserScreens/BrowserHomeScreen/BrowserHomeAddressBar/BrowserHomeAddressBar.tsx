import {useContext} from 'react';
import {View} from 'react-native';
import BrowserAddressHomeBarStyles from './BrowserHomeAddressBar.stylesheet';
import AddressBarButton from './AddressBarButton/AddressBarButton';
import AddressBarInputControl from './AddressBarInputControl/AddressBarInputControl';
import BrowserHomeAddressBarStyles from './BrowserHomeAddressBar.stylesheet';
import {BrowserContext} from '../../../../../../Core/providers/BrowserContextProvider';
import AppIconCatalog from '../../../../../../common/icons/AppIconCatalog';

const addressBarIcons = AppIconCatalog['utilities']['browser']['addressBar'];

function BrowserHomeAddressBar(): JSX.Element {
  const browserContext = useContext(BrowserContext);
  const currentTabKey = browserContext.currentWebTabKey;

  const handleTabsDrawerToggle = () => {
    browserContext.setWebTabsDrawerOpen(!browserContext.isWebTabsDrawerOpen);
  };

  const handleGoToHome = () => {
    if (!currentTabKey) return;
    const webTab = browserContext.webTabs[currentTabKey];
    if (!webTab.url) return;
    browserContext.setWebTabs(prevState => ({
      ...prevState,
      [currentTabKey]: {
        ...webTab,
        name: 'Home',
        url: undefined,
        historyStack: [...webTab.historyStack, webTab.url],
      },
    }));
  };

  const LeftSection: React.JSX.Element = (
    <View style={BrowserHomeAddressBarStyles.leftSection}>
      <AddressBarButton
        icon={addressBarIcons['tab']}
        action={handleTabsDrawerToggle}
      />
      <AddressBarButton
        icon={addressBarIcons['home']}
        action={handleGoToHome}
      />
    </View>
  );

  const MiddleSection: React.JSX.Element = (
    <View style={BrowserAddressHomeBarStyles.middleSection}>
      <AddressBarInputControl />
    </View>
  );

  const RightSection: React.JSX.Element = (
    <View style={BrowserAddressHomeBarStyles.rightSection}>
      <AddressBarButton icon={addressBarIcons['menu']} action={() => {}} />
    </View>
  );

  return (
    <View style={BrowserAddressHomeBarStyles.addressBarContainer}>
      {LeftSection}
      {MiddleSection}
      {RightSection}
    </View>
  );
}

export default BrowserHomeAddressBar;
