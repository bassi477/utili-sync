import AppThemeColor from './Color';
// dependencies
const colorDark = AppThemeColor['base']['dark'],
  colorPrimary = AppThemeColor['base']['primary'];
// properties
const iconSizes = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 28,
  xl: 32,
};
// exported properties
const AppThemeIcon = {
  color: colorDark,
  activeColor: colorPrimary,
  sizes: iconSizes,
};

export default AppThemeIcon;
