import {ViewStyle} from 'react-native';
import AppThemeColor from './Color';
import AppThemeSpacing from './Spacing';
// dependencies
const colorGray200 = AppThemeColor['gray']['gray200'],
  scaleBase = AppThemeSpacing['spacerBase'];
// properties
const coreHighlightStyle: ViewStyle = {
  flex: 0,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: 1 * scaleBase,
  paddingVertical: 0.5 * scaleBase,
};
const coreHighlight = {
  activeOpacity: 0.8,
  underlayColor: colorGray200,
  style: coreHighlightStyle,
};
const appThemeButtonCore = {highlight: coreHighlight};
const addressBarButtonStyle: ViewStyle = {
  marginHorizontal: 0.25 * scaleBase,
};
const browserAddressBarButton = {
  style: addressBarButtonStyle,
};
const appThemeButtonBrowser = {
  addressBar: browserAddressBarButton,
};
// exported properties
const AppThemeButton = {
  core: appThemeButtonCore,
  browser: appThemeButtonBrowser,
};

export default AppThemeButton;
