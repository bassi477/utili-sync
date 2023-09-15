import AppThemeColor from './Color';
import AppThemeSpacing from './Spacing';
// Components
//
// Define common padding and border radius sizes and more.

// dependencies
const colorBlack = AppThemeColor['gray']['black'],
  colorGray300 = AppThemeColor['gray']['gray300'],
  colorWhite = AppThemeColor['gray']['white'],
  colorPrimary = AppThemeColor['base']['primary'],
  scaleBase = AppThemeSpacing['spacerBase'];
// border
const borderWidth = 1,
  borderWidths = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
  },
  borderColor = colorGray300;
// border-radius
const borderRadius = 0.25 * scaleBase,
  borderRadiusSm = 0.2 * scaleBase,
  borderRadiusLg = 0.3 * scaleBase,
  borderRadiusPill = 50 * scaleBase;
// box-shadow
const boxShadow = {
    color: colorBlack,
    opacity: 0.15,
    offset: {
      width: 0,
      height: 1,
    },
    radius: 0.2,
    elevation: 0.25 * scaleBase,
  }, // `${0.5 * scaleBase} ${scaleBase} rgba(${colorBlack}, .15)`,
  boxShadowSm = `0 ${0.125 * scaleBase} ${
    0.25 * scaleBase
  } rgba(${colorBlack}, .075)`,
  boxShadowLg = `0 ${1 * scaleBase} ${3 * scaleBase} rgba($black, .175);`,
  boxShadowInset = `inset 0 1 2 rgba(${colorBlack}, .075);`;
// active - [background, color]
const componentActiveColor = colorWhite,
  componentActiveBg = colorPrimary;
// caret
const caretWidth = 0.3 * scaleBase,
  caretVerticalAlign = caretWidth * 0.85,
  caretSpacing = caretWidth * 0.85;
// transition
const transitionBase = 'all .2s ease-in-out',
  transitionFade = 'opacity .15s linear',
  transitionCollapse = 'height .35s ease';
// aspect-ratios
const aspectRatios = {
  '1x1': '100%',
  '4x3': 'calc(3 / 4 * 100%)',
  '16x9': 'calc(9 / 16 * 100%)',
  '21x9': 'calc(9 / 21 * 100%)',
};

const AppThemeComponent = {
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
    background: componentActiveBg,
  },
  caret: {
    width: caretWidth,
    verticalAlign: caretVerticalAlign,
    spacing: caretSpacing,
  },
  transition: {
    base: transitionBase,
    fade: transitionFade,
    collapse: transitionCollapse,
  },
  aspectRatios: aspectRatios,
};

export default AppThemeComponent;
