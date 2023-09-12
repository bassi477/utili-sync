import AppThemeColorPropsHelper from "../../helpers/AppThemeColorPropsHelper";

export const AppThemeGrayColorProps = {
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

export const AppThemeBaseColorProps = {
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
    white: AppThemeGrayColorProps['white'],
    gray: AppThemeGrayColorProps['gray600'],
    "gray-dark": AppThemeGrayColorProps['gray800']
};

export const AppThemeCoreColorProps = {
    primary: AppThemeBaseColorProps['blue'],
    secondary: AppThemeGrayColorProps['gray600'],
    success: AppThemeBaseColorProps['green'],
    info: AppThemeBaseColorProps['cyan'],
    warning: AppThemeBaseColorProps['yellow'],
    danger: AppThemeBaseColorProps['red'],
    light: AppThemeGrayColorProps['gray100'],
    dark: AppThemeGrayColorProps['gray900'],
};

export const AppThemeBlueColorProps = {
    blue100: AppThemeColorPropsHelper.tintColor(AppThemeBaseColorProps['blue'], 0.8),
    blue200: AppThemeColorPropsHelper.tintColor(AppThemeBaseColorProps['blue'], 0.6),
    blue300: AppThemeColorPropsHelper.tintColor(AppThemeBaseColorProps['blue'], 0.4),
    blue400: AppThemeColorPropsHelper.tintColor(AppThemeBaseColorProps['blue'], 0.2),
    blue500: AppThemeBaseColorProps['blue'],
    blue600: AppThemeColorPropsHelper.shadeColor(AppThemeBaseColorProps['blue'], 0.2),
    blue700: AppThemeColorPropsHelper.shadeColor(AppThemeBaseColorProps['blue'], 0.4),
    blue800: AppThemeColorPropsHelper.shadeColor(AppThemeBaseColorProps['blue'], 0.6),
    blue900: AppThemeColorPropsHelper.shadeColor(AppThemeBaseColorProps['blue'], 0.8),
};

export const AppThemeIndigoColorProps = {
    indigo100: AppThemeColorPropsHelper.tintColor(AppThemeBaseColorProps['indigo'], 0.8),
    indigo200: AppThemeColorPropsHelper.tintColor(AppThemeBaseColorProps['indigo'], 0.6),
    indigo300: AppThemeColorPropsHelper.tintColor(AppThemeBaseColorProps['indigo'], 0.4),
    indigo400: AppThemeColorPropsHelper.tintColor(AppThemeBaseColorProps['indigo'], 0.2),
    indigo500: AppThemeBaseColorProps['indigo'],
    indigo600: AppThemeColorPropsHelper.shadeColor(AppThemeBaseColorProps['indigo'], 0.2),
    indigo700: AppThemeColorPropsHelper.shadeColor(AppThemeBaseColorProps['indigo'], 0.4),
    indigo800: AppThemeColorPropsHelper.shadeColor(AppThemeBaseColorProps['indigo'], 0.6),
    indigo900: AppThemeColorPropsHelper.shadeColor(AppThemeBaseColorProps['indigo'], 0.8),
};

export const AppThemePurpleColorProps = {
    purple100: AppThemeColorPropsHelper.tintColor(AppThemeBaseColorProps['purple'], 0.8),
    purple200: AppThemeColorPropsHelper.tintColor(AppThemeBaseColorProps['purple'], 0.6),
    purple300: AppThemeColorPropsHelper.tintColor(AppThemeBaseColorProps['purple'], 0.4),
    purple400: AppThemeColorPropsHelper.tintColor(AppThemeBaseColorProps['purple'], 0.2),
    purple500: AppThemeBaseColorProps['purple'],
    purple600: AppThemeColorPropsHelper.shadeColor(AppThemeBaseColorProps['purple'], 0.2),
    purple700: AppThemeColorPropsHelper.shadeColor(AppThemeBaseColorProps['purple'], 0.4),
    purple800: AppThemeColorPropsHelper.shadeColor(AppThemeBaseColorProps['purple'], 0.6),
    purple900: AppThemeColorPropsHelper.shadeColor(AppThemeBaseColorProps['purple'], 0.8),
};

export const AppThemePinkColorProps = {
    pink100: AppThemeColorPropsHelper.tintColor(AppThemeBaseColorProps['pink'], 0.8),
    pink200: AppThemeColorPropsHelper.tintColor(AppThemeBaseColorProps['pink'], 0.6),
    pink300: AppThemeColorPropsHelper.tintColor(AppThemeBaseColorProps['pink'], 0.4),
    pink400: AppThemeColorPropsHelper.tintColor(AppThemeBaseColorProps['pink'], 0.2),
    pink500: AppThemeBaseColorProps['pink'],
    pink600: AppThemeColorPropsHelper.shadeColor(AppThemeBaseColorProps['pink'], 0.2),
    pink700: AppThemeColorPropsHelper.shadeColor(AppThemeBaseColorProps['pink'], 0.4),
    pink800: AppThemeColorPropsHelper.shadeColor(AppThemeBaseColorProps['pink'], 0.6),
    pink900: AppThemeColorPropsHelper.shadeColor(AppThemeBaseColorProps['pink'], 0.8),
};

export const AppThemeRedColorProps = {
    red100: AppThemeColorPropsHelper.tintColor(AppThemeBaseColorProps['red'], 0.8),
    red200: AppThemeColorPropsHelper.tintColor(AppThemeBaseColorProps['red'], 0.6),
    red300: AppThemeColorPropsHelper.tintColor(AppThemeBaseColorProps['red'], 0.4),
    red400: AppThemeColorPropsHelper.tintColor(AppThemeBaseColorProps['red'], 0.2),
    red500: AppThemeBaseColorProps['red'],
    red600: AppThemeColorPropsHelper.shadeColor(AppThemeBaseColorProps['red'], 0.2),
    red700: AppThemeColorPropsHelper.shadeColor(AppThemeBaseColorProps['red'], 0.4),
    red800: AppThemeColorPropsHelper.shadeColor(AppThemeBaseColorProps['red'], 0.6),
    red900: AppThemeColorPropsHelper.shadeColor(AppThemeBaseColorProps['red'], 0.8),
};

export const AppThemeOrangeColorProps = {
    orange100: AppThemeColorPropsHelper.tintColor(AppThemeBaseColorProps['orange'], 0.8),
    orange200: AppThemeColorPropsHelper.tintColor(AppThemeBaseColorProps['orange'], 0.6),
    orange300: AppThemeColorPropsHelper.tintColor(AppThemeBaseColorProps['orange'], 0.4),
    orange400: AppThemeColorPropsHelper.tintColor(AppThemeBaseColorProps['orange'], 0.2),
    orange500: AppThemeBaseColorProps['orange'],
    orange600: AppThemeColorPropsHelper.shadeColor(AppThemeBaseColorProps['orange'], 0.2),
    orange700: AppThemeColorPropsHelper.shadeColor(AppThemeBaseColorProps['orange'], 0.4),
    orange800: AppThemeColorPropsHelper.shadeColor(AppThemeBaseColorProps['orange'], 0.6),
    orange900: AppThemeColorPropsHelper.shadeColor(AppThemeBaseColorProps['orange'], 0.8),
};

export const AppThemeYellowColorProps = {
    yellow100: AppThemeColorPropsHelper.tintColor(AppThemeBaseColorProps['yellow'], 0.8),
    yellow200: AppThemeColorPropsHelper.tintColor(AppThemeBaseColorProps['yellow'], 0.6),
    yellow300: AppThemeColorPropsHelper.tintColor(AppThemeBaseColorProps['yellow'], 0.4),
    yellow400: AppThemeColorPropsHelper.tintColor(AppThemeBaseColorProps['yellow'], 0.2),
    yellow500: AppThemeBaseColorProps['yellow'],
    yellow600: AppThemeColorPropsHelper.shadeColor(AppThemeBaseColorProps['yellow'], 0.2),
    yellow700: AppThemeColorPropsHelper.shadeColor(AppThemeBaseColorProps['yellow'], 0.4),
    yellow800: AppThemeColorPropsHelper.shadeColor(AppThemeBaseColorProps['yellow'], 0.6),
    yellow900: AppThemeColorPropsHelper.shadeColor(AppThemeBaseColorProps['yellow'], 0.8),
};

export const AppThemeTealColorProps = {
    teal100: AppThemeColorPropsHelper.tintColor(AppThemeBaseColorProps['teal'], 0.8),
    teal200: AppThemeColorPropsHelper.tintColor(AppThemeBaseColorProps['teal'], 0.6),
    teal300: AppThemeColorPropsHelper.tintColor(AppThemeBaseColorProps['teal'], 0.4),
    teal400: AppThemeColorPropsHelper.tintColor(AppThemeBaseColorProps['teal'], 0.2),
    teal500: AppThemeBaseColorProps['teal'],
    teal600: AppThemeColorPropsHelper.shadeColor(AppThemeBaseColorProps['teal'], 0.2),
    teal700: AppThemeColorPropsHelper.shadeColor(AppThemeBaseColorProps['teal'], 0.4),
    teal800: AppThemeColorPropsHelper.shadeColor(AppThemeBaseColorProps['teal'], 0.6),
    teal900: AppThemeColorPropsHelper.shadeColor(AppThemeBaseColorProps['teal'], 0.8),
};

export const AppThemeCyanColorProps = {
    cyan100: AppThemeColorPropsHelper.tintColor(AppThemeBaseColorProps['cyan'], 0.8),
    cyan200: AppThemeColorPropsHelper.tintColor(AppThemeBaseColorProps['cyan'], 0.6),
    cyan300: AppThemeColorPropsHelper.tintColor(AppThemeBaseColorProps['cyan'], 0.4),
    cyan400: AppThemeColorPropsHelper.tintColor(AppThemeBaseColorProps['cyan'], 0.2),
    cyan500: AppThemeBaseColorProps['cyan'],
    cyan600: AppThemeColorPropsHelper.shadeColor(AppThemeBaseColorProps['cyan'], 0.2),
    cyan700: AppThemeColorPropsHelper.shadeColor(AppThemeBaseColorProps['cyan'], 0.4),
    cyan800: AppThemeColorPropsHelper.shadeColor(AppThemeBaseColorProps['cyan'], 0.6),
    cyan900: AppThemeColorPropsHelper.shadeColor(AppThemeBaseColorProps['cyan'], 0.8),
};

const AppThemeColorVariationProps = {
    blue: AppThemeBlueColorProps,
    indigo: AppThemeIndigoColorProps,
    purple: AppThemePurpleColorProps,
    pink: AppThemePinkColorProps,
    red: AppThemeRedColorProps,
    orange: AppThemeOrangeColorProps,
    yellow: AppThemeYellowColorProps,
    teal: AppThemeTealColorProps,
    cyan: AppThemeCyanColorProps,
};

const AppThemeColorProps = {
    base: AppThemeBaseColorProps,
    core: AppThemeCoreColorProps,
    gray: AppThemeGrayColorProps,
    varations: AppThemeColorVariationProps,
};

export default AppThemeColorProps;