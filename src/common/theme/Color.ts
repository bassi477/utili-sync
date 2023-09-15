const appThemeColorGray = {
  white: '#ffffff',
  gray100: '#f8f9fa',
  gray200: '#e9ecef',
  gray300: '#dee2e6',
  gray400: '#ced4da',
  gray500: '#adb5bd',
  gray600: '#6c757d',
  gray700: '#495057',
  gray800: '#343a40',
  gray900: '#212529',
  black: '#000000',
};

const appThemeColorPrimary = {
  blue: '#0d6efd',
  indigo: '#6610f2',
  purple: '#6f42c1',
  pink: '#d63384',
  red: '#dc3545',
  orange: '#fd7e14',
  yellow: '#ffc107',
  green: '#198754',
  teal: '#20c997',
  cyan: '#0dcaf0',
  white: appThemeColorGray['white'],
  gray: appThemeColorGray['gray600'],
  darkGray: appThemeColorGray['gray800'],
};

const appThemeColorBase = {
  primary: appThemeColorPrimary['blue'],
  secondary: appThemeColorGray['gray600'],
  success: appThemeColorPrimary['green'],
  info: appThemeColorPrimary['cyan'],
  warning: appThemeColorPrimary['yellow'],
  danger: appThemeColorPrimary['red'],
  light: appThemeColorGray['gray100'],
  dark: appThemeColorGray['gray900'],
};

const AppThemeColor = {
  gray: appThemeColorGray,
  primary: appThemeColorPrimary,
  base: appThemeColorBase,
};

export default AppThemeColor;
