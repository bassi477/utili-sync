
// Components
//
// Define common padding and border radius sizes and more.

import { AppThemeCoreColorProps, AppThemeGrayColorProps } from "./Colors";

const appThemeBlackColor = AppThemeGrayColorProps['black'];
const appThemeGray300Color = AppThemeGrayColorProps['gray300'];
const appThemeWhiteColor = AppThemeGrayColorProps['white'];
const appThemePrimaryColor = AppThemeCoreColorProps['primary'];
// rem scale base
const remScaleBase = 16;
// border
const borderWidth = 1;
const borderWidths = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
};
const borderColor = appThemeGray300Color;
// border-radius
const borderRadius = .25 * remScaleBase;
const borderRadiusSm = .2 * remScaleBase;
const borderRadiusLg = .3 * remScaleBase;
const borderRadiusPill = 50 * remScaleBase;
// box-shadow
const boxShadow = `${0.5 * remScaleBase} ${1 * remScaleBase} rgba(${appThemeBlackColor}, .15)`;
const boxShadowSm = `0 ${.125 * remScaleBase} ${.25 * remScaleBase} rgba(${appThemeBlackColor}, .075)`;
const boxShadowLg = `0 ${1 * remScaleBase} ${3 * remScaleBase} rgba($black, .175);`
const boxShadowInset = `inset 0 1 2 rgba(${appThemeBlackColor}, .075);`
// active - [background, color]
const componentActiveColor = appThemeWhiteColor;
const componentActiveBg = appThemePrimaryColor;
// caret
const caretWidth = .3 * remScaleBase;
const caretVerticalAlign = caretWidth * .85;
const caretSpacing = caretWidth * .85;
// transition
const transitionBase = 'all .2s ease-in-out';
const transitionFade = 'opacity .15s linear';
const transitionCollapse = 'height .35s ease';
// aspect-ratios
const aspectRatios = {
    "1x1": '100%',
    "4x3": 'calc(3 / 4 * 100%)',
    "16x9": 'calc(9 / 16 * 100%)',
    "21x9": 'calc(9 / 21 * 100%)'
};

const AppThemeComponentProps = {
    border: {
        width: borderWidth,
        widths: borderWidths,
        color: borderColor,
    },
    borderRadius: {
        normal: borderRadius,
        sm: borderRadiusSm,
        lg: borderRadiusLg,
        pill: borderRadiusPill,
    },
    boxShadow: {
        normal: boxShadow,
        sm: boxShadowSm,
        lg: boxShadowLg,
        inset: boxShadowInset,
    },
    active: {
        color: componentActiveColor,
        background: componentActiveBg
    },
    caret: {
        width: caretWidth,
        verticalAlign: caretVerticalAlign,
        spacing: caretSpacing
    },
    transition: {
        base: transitionBase,
        fade: transitionFade,
        collapse: transitionCollapse
    },
    aspectRatios: aspectRatios
};

export default AppThemeComponentProps;