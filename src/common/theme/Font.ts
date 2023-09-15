// Typography
//
// Font, line-height, and color for body text, headings, and more.

// font family
const fontFamilySansSerif = `system-ui, -apple-system, "Segoe UI", Roboto,
"Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", "sans-serif", "Apple Color Emoji",
"Segoe UI Emoji", "Noto Color Emoji"`,
  fontFamilyMonoSpace = `"SFMono-Regular", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
  fontFamilyBase = fontFamilySansSerif,
  fontFamilyCode = fontFamilyMonoSpace;
// font size
const fontSizeRoot = null,
  fontSizeBase = 16,
  fontSizeSm = fontSizeBase * 0.875,
  fontSizeLg = fontSizeBase * 1.25;
// font weight
const fontWeightLighter = '100',
  fontWeightLight = '300',
  fontWeightNormal = '400',
  fontWeightBold = '700',
  fontWeightBolder = '900',
  fontWeightBase = fontWeightNormal;
// line height
const lineHeightBase = 1.5,
  lineHeightSm = 1.25,
  lineHeightLg = 2;
// headings
const h1FontSize = fontSizeBase * 2.5,
  h2FontSize = fontSizeBase * 2,
  h3FontSize = fontSizeBase * 1.75,
  h4FontSize = fontSizeBase * 1.5,
  h5FontSize = fontSizeBase * 1.25,
  h6FontSize = fontSizeBase;

const AppThemeFont = {
  family: {
    sansSerif: fontFamilySansSerif,
    monoSpace: fontFamilyMonoSpace,
    base: fontFamilyBase,
    code: fontFamilyCode,
  },
  sizes: {
    root: fontSizeRoot,
    base: fontSizeBase,
    sm: fontSizeSm,
    lg: fontSizeLg,
    headings: {
      h1: h1FontSize,
      h2: h2FontSize,
      h3: h3FontSize,
      h4: h4FontSize,
      h5: h5FontSize,
      h6: h6FontSize,
    },
  },
  weights: {
    base: fontWeightBase,
    lighter: fontWeightLighter,
    light: fontWeightLight,
    normal: fontWeightNormal,
    bold: fontWeightBold,
    bolder: fontWeightBolder,
  },
  lineHeights: {
    base: lineHeightBase,
    sm: lineHeightSm,
    lg: lineHeightLg,
  },
};

export default AppThemeFont;
