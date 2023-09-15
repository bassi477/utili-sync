import {TextStyle, ViewStyle} from 'react-native';
import AppThemeColor from './Color';
import AppThemeSpacing from './Spacing';
import AppThemeIcon from './Icon';
import AppThemeFont from './Font';
import AppThemeComponent from './Component';
// dependencies
const colorGray200 = AppThemeColor['gray']['gray200'],
  colorPrimary = AppThemeColor['base']['primary'],
  colorLight = AppThemeColor['base']['light'],
  iconSizes = AppThemeIcon['sizes'],
  scaleBase = AppThemeSpacing['spacerBase'],
  componentTheme = AppThemeComponent,
  shadowNormal = AppThemeComponent['boxShadow']['normal'],
  borderTheme = AppThemeComponent['border'],
  borderRadiusTheme = AppThemeComponent['borderRadius'],
  fontTheme = AppThemeFont;
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

const newTabButton = {
  container: {
    flex: 0,
    backgroundColor: colorPrimary,
    margin: 0.5 * scaleBase,
    borderRadius: borderRadiusTheme['normal'],
    borderColor: borderTheme['color'],
    borderWidth: borderTheme['width'],
    shadowColor: shadowNormal['color'],
    shadowOpacity: shadowNormal['opacity'],
    shadowOffset: shadowNormal['offset'],
    shadowRadius: shadowNormal['radius'],
    elevation: shadowNormal['elevation']
  } as ViewStyle,
  inner: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  } as ViewStyle,
  icon: {
    color: colorLight,
    size: iconSizes['sm'],
  },
  text: {
    color: colorLight,
    fontWeight: fontTheme['weights']['bold'],
    fontSize: fontTheme['sizes']['base'],
  } as TextStyle,
};
const browserWebTabButton = {
  newTab: newTabButton,
};
const appThemeButtonBrowser = {
  addressBar: browserAddressBarButton,
  webTab: browserWebTabButton,
};
// exported properties
const AppThemeButton = {
  core: appThemeButtonCore,
  browser: appThemeButtonBrowser,
};

export default AppThemeButton;
